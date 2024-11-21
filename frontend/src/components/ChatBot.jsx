"use client";
import openbot from "../assets/Frame 52226.svg";
import aiuser from "../assets/Ellipse 34.svg";
import nofbot from "../assets/botnof.svg";
import sendbot from "../assets/send.svg";
import { useEffect, useState, useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import {
  Popover,
  //   PopoverArrow,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import { Alert, AlertDescription } from "./ui/alert";
import { Skeleton } from "./ui/skeleton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ScrollArea } from "./ui/scroll-area";
import {
  UserIcon,
  SendIcon,
  XIcon,
  TrashIcon,
  EllipsisVertical,
  Clock,
  Bot,
  MessageCircle,
  FactoryIcon,
  BotIcon,
} from "lucide-react";
import { cn } from "../lib/utils";
import {
  Tooltip,
  //   TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
// // import { toast } from "@/hooks/use-toast";

const sectors = [
  {
    name: "Engineering",
    description: "Technical support for engineering queries.",
  },
  {
    name: "Insurance",
    description: "Assistance with insurance-related queries.",
  },
  {
    name: "Customer Service",
    description: "General customer service support.",
  },
];
const BOT_MODES = {
  HOME: {
    name: "Home Assistant",
    description: "General assistance and navigation help",
    apiEndpoint: "/api/home-assistant",
    placeholder: "Ask me anything about our services...",
    formatPayload: (message, conversation) => ({
      message,
    }),
    requiresAuth: false,
  },
  SHOPPING: {
    name: "Shopping Assistant",
    description: "Help you find and purchase products",
    apiEndpoint: `${import.meta.env.VITE_API_URL}/chat`,
    placeholder: "What are you looking to buy?",
    formatPayload: (message, conversation) => ({
      message,
      conversationHistory: conversation.map((msg) => ({
        message: msg.message,
        isUser: msg.isUser,
      })),
    }),
    requiresAuth: true, // This mode requires authentication
  },
  INVENTORY: {
    name: "Inventory Assistant",
    description: "Check stock and inventory management",
    apiEndpoint: "/inventory/check-product",
    placeholder: "Ask about inventory status...",
    requiresAuth: true, // This mode requires authentication

    formatPayload: (message) => {
      // Assuming the message format is "ProductName Price Stock"
      const [name, price, stock] = message.split(" ");
      return {
        name,
        price: Number(price),
        stock: Number(stock),
      };
    },
  },
};

const Message = ({ mode }) => {
  console.log("Received mode:", mode); // Debug log

  // Add validation at the start
  const validModes = Object.keys(BOT_MODES);
  const safeMode = validModes.includes(mode) ? mode : "HOME";

  const [conversation, setConversation] = useState([]);
  const [message, setMessage] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [sector, setSector] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const chatContainerRef = useRef(null);

  const currentBot = BOT_MODES[safeMode];

  const handleSendMessage = async () => {
    if (!message) return;

    const newMessage = {
      message: `<div><p>${message}</p></div>`, // Wrap in HTML
      isUser: true,
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
    };

    setConversation((prev) => [...prev, newMessage]);
    setIsPending(true);

    try {
      // Format payload based on bot mode
      const currentBot = BOT_MODES[safeMode];
      const payload = currentBot.formatPayload(message, conversation);

      // Make API call with formatted payload

      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
      };
      // Add Authorization header if required
      if (currentBot.requiresAuth) {
        const accessToken = localStorage.getItem("access");
        console.log("Using access token:", accessToken); // Debug log
        console.log(accessToken);
        if (!accessToken) {
          throw new Error("Authentication required");
        }
        headers["Authorization"] = `Bearer ${accessToken}`;
      }

      console.log("Making request to:", currentBot.apiEndpoint); // Debug log
      console.log("With headers:", headers); // Debug log
      console.log("With payload:", payload); // Debug log

      const response = await fetch(currentBot.apiEndpoint, {
        method: "POST",
        headers,
        body: JSON.stringify(payload),
        mode: "cors",
      });

      // Log the raw response
      console.log("Raw response:", response);
      // Try to get the response text first
      const responseText = await response.text();
      console.log("Response text:", responseText);

      if (!response.ok) {
        // Try to parse the error response
        let errorData;
        try {
          errorData = JSON.parse(responseText);
        } catch (e) {
          errorData = { message: responseText };
        }
        console.error("API Error:", errorData);
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${
            errorData.message || responseText
          }`
        );
      }

      // Parse the successful response
      let data;
      try {
        data = JSON.parse(responseText);
      } catch (e) {
        console.error("Error parsing response:", e);
        throw new Error("Invalid response format from server");
      }

      console.log("Parsed response data:", data);
      // Format the response based on the mode
      let responseMessage;
      if (mode === "INVENTORY") {
        responseMessage = {
          message: `<div>
            <p>Product: ${data.name}</p>
            <p>Price: $${data.price}</p>
            <p>Stock: ${data.stock} units</p>
          </div>`,
          isUser: false,
          id: crypto.randomUUID(),
          date: new Date().toISOString(),
        };
      } else {
        responseMessage = {
          message: `<div><p>${
            data.aiResponse || data.response || data.message || "No response"
          }</p></div>`, // Added aiResponse
          isUser: false,
          id: crypto.randomUUID(),
          date: new Date().toISOString(),
        };
      }

      setConversation((prev) => [...prev, responseMessage]);

      setTimeout(() => {
        chatContainerRef.current?.scrollTo({
          top: chatContainerRef.current.scrollHeight,
          behavior: "smooth",
        });
      }, 100);
    } catch (error) {
      let errorMessage = "An error occurred. Please try again.";

      // Customize error message based on the error
      if (error.message === "Authentication required") {
        errorMessage = "Please log in to use this feature.";
      } else if (error.message.includes("HTTP error")) {
        errorMessage = "Server error. Please try again later.";
      }
      setConversation((prev) => [
        ...prev,
        {
          message: `<div><p>${errorMessage}</p></div>`,
          isUser: false,
          isError: true,
          id: crypto.randomUUID(),
          date: new Date().toISOString(),
        },
      ]);
    } finally {
      setIsPending(false);
      setMessage("");
    }
  };

  const renderHelperText = () => {
    if (mode === "INVENTORY") {
      return (
        <div className="text-xs text-gray-500 px-2">
          Format: ProductName Price Stock (e.g., "Macbook 400 5")
        </div>
      );
    }
    return null;
  };

  //   const handleSendMessage = async () => {
  //     if (!message || !sector) return;
  //     const newMessage = {
  //       message,
  //       isUser: true,
  //       id: crypto.randomUUID(),
  //       date: new Date().toISOString(),
  //     };

  //     setConversation((prev) => [...prev, newMessage]);

  //     setIsPending(true);

  //     try {
  //       // Simulate AI response generation

  //       const response = await fetch(currentBot.apiEndpoint, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ message, conversation }),
  //       });

  //       setTimeout(() => {
  //         setConversation((prev) => [...prev, responseMessage]);
  //         chatContainerRef.current?.scrollTo({
  //           top: chatContainerRef.current.scrollHeight,
  //           behavior: "smooth",
  //         });
  //         setIsPending(false);
  //       }, 1000);
  //     } catch (error) {
  //       setConversation((prev) => [
  //         ...prev,
  //         {
  //           message: `<div><p>An error occurred. Please try again.</p></div>`,
  //           isUser: false,
  //           isError: true,
  //           id: crypto.randomUUID(),
  //           date: new Date().toISOString(),
  //         },
  //       ]);
  //       setIsPending(false);
  //     }

  //     setMessage("");
  //   };

  const resetState = () => {
    setConversation([]);
    setMessage("");
    setSector("");
  };

  const renderContent = () => {
    return (
      <ScrollArea className="h-[400px] px-2" viewportRef={chatContainerRef}>
        <div className="h-full space-y-4">
          {conversation.length === 0 ? (
            <div className="flex flex-col items-center justify-center flex-1 h-full my-auto gap-y-4 min-h-[400px]">
              <MessageCircle className="w-12 h-12 text-gray-500" />
              <p className="px-4 text-sm text-center text-gray-500">
                Start a conversation with NofBot
              </p>
            </div>
          ) : (
            conversation.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "flex gap-2",
                  item.isUser ? "flex-row-reverse" : "flex-row"
                )}
              >
                <Avatar>
                  <AvatarFallback>
                    {item.isUser ? <UserIcon /> : <img src={aiuser} alt="" />}
                  </AvatarFallback>
                </Avatar>
                <div
                  dangerouslySetInnerHTML={{ __html: item.message }}
                  className={cn(
                    "rounded-lg p-2 text-xs",
                    item.isUser
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted",
                    item.isError && "bg-destructive text-destructive-foreground"
                  )}
                />
              </div>
            ))
          )}
        </div>
      </ScrollArea>
    );
  };
  //   const renderContent = () => {
  //     if (!sector) {
  //       return (
  //         <div className="flex flex-col items-center justify-center flex-1 h-full my-auto gap-y-4 min-h-[400px]">
  //           <MessageCircle className="w-12 h-12 text-gray-500" />
  //           <p className="px-4 text-sm text-center text-gray-500">
  //             Select a sector to start a conversation.
  //           </p>
  //           <DropdownMenu>
  //             <DropdownMenuTrigger asChild>
  //               <Button variant="outline" size="sm" className="gap-x-2">
  //                 <Bot className="w-5 h-5" />
  //                 Select Sector
  //               </Button>
  //             </DropdownMenuTrigger>
  //             <DropdownMenuContent>
  //               {sectors.map((sector) => (
  //                 <DropdownMenuItem
  //                   key={sector.name}
  //                   onClick={() => setSector(sector.name)}
  //                 >
  //                   <FactoryIcon className="w-4 h-4 mr-2" />
  //                   <span>{sector.name}</span>
  //                 </DropdownMenuItem>
  //               ))}
  //             </DropdownMenuContent>
  //           </DropdownMenu>
  //         </div>
  //       );
  //     }

  //     return (
  //       <ScrollArea className="h-[400px] px-2" viewportRef={chatContainerRef}>
  //         <div className="h-full space-y-4">
  //           {conversation.map((item, index) => (
  //             <div
  //               key={index}
  //               className={cn(
  //                 "flex gap-2",
  //                 item.isUser ? "flex-row-reverse" : "flex-row"
  //               )}
  //             >
  //               <Avatar>
  //                 <AvatarFallback>
  //                   {item.isUser ? <UserIcon /> : <img src={aiuser} alt="" />}
  //                 </AvatarFallback>
  //               </Avatar>
  //               <div
  //                 dangerouslySetInnerHTML={{ __html: item.message }}
  //                 className={cn(
  //                   "rounded-lg p-2 text-xs",
  //                   item.isUser
  //                     ? "bg-primary text-primary-foreground"
  //                     : "bg-muted",
  //                   item.isError && "bg-destructive text-destructive-foreground"
  //                 )}
  //               />
  //             </div>
  //           ))}
  //         </div>
  //       </ScrollArea>
  //     );
  //   };

  return (
    <>
      {!isOpen && (
        <button
          className="fixed bottom-4 right-4 border-2 border-white flex rounded-full z-50"
          onClick={() => {
            resetState();
            setIsOpen(true);
          }}
          aria-label="Open Chatbot"
        >
          <img src={openbot} className="w-[130px]" alt="" />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-5 right-5 w-full sm:w-[400px] h-[80vh] bg-white shadow-lg z-50 lg:rounded-lg border-t border-l sm:border-l sm:rounded-t-lg flex flex-col">
          <div className="flex justify-between items-center p-4 border-b lg:rounded-lg bg-[#3835ED]">
            <div className="flex justify-center items-center">
              <img src={nofbot} className="w-[60px]" alt="" />
              <h2 className="font-[700] text-[30px] ml-3 text-white">NofBot</h2>
            </div>

            <button
              onClick={() => {
                resetState();
                setIsOpen(false);
              }}
              className="text-white bg-[#3835ED] hover:text-[#cb5858] text-[30px]"
              aria-label="Close Chatbot"
            >
              ✖
            </button>
          </div>
          <div className="flex-1">{renderContent()}</div>

          <div className="mt-4 flex flex-col gap-2 p-2 border-t-2">
            {renderHelperText()}
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={BOT_MODES[mode].placeholder}
                className="flex-1 border p-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#3835ED]"
                required
              />
              <Button
                onClick={handleSendMessage}
                disabled={isPending}
                className="bg-transparent hover:bg-transparent text-black text-[30px]"
              >
                {isPending ? (
                  "..."
                ) : (
                  <img src={sendbot} className="hover:bg-white " alt="" />
                )}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
