"use client";
import openbot from "../assets/Frame 52226.svg"
import aiuser from "../assets/Ellipse 34.svg"
import nofbot from "../assets/botnof.svg"
import sendbot from "../assets/send.svg"
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


//   const getEngineeringPrompt = (issue, previousLogs) => {
//     return `
//             You are a technical support engineer, providing assistance to customers who have reported technical issues or require help with their engineering queries. Follow the rules below and consider the customer's previous logs to offer precise support.
    
//             Previous support logs:
    
//             ${previousLogs?.map(
//               (log) =>
//                 `${log.isUser ? "Customer Issue: " : "Your Response: "}${
//                   log.message
//                 }`
//             )}
    
//             1. Create your response using only HTML elements.
//             2. You can use the following HTML tags to create your response: <p>, <h1>, <h2>, <h3>, <ul>, <li>, <strong>, <em>, <a>, <code>, <pre>.
//             3. Do not use style or class attributes in your response.
//             4. Your response should be enclosed within a single root element, such as a <div> tag.
//             5. Use the href attribute for links and use "#" instead of actual URLs.
//             6. Provide step-by-step instructions, code snippets, or troubleshooting steps as needed.
//             7. If you cannot resolve the issue with the given information, politely ask for more details or direct the customer to another team that can help.
    
//             Here is the customer's issue:
    
//             ${issue}
    
//             Please respond to this issue according to the rules above and provide clear instructions.
//         `;
//   };
  
//   const getInsurancePrompt = (
//     query,
//     oldConversations
//   ) => {
//     return `
//             You are an insurance claims representative, helping customers with their insurance-related queries. Please follow the guidelines below and refer to the customer's past queries to offer accurate assistance.
    
//             Previous queries and responses:
    
//             ${oldConversations?.map(
//               (q) =>
//                 `${q.isUser ? "Customer Query: " : "Your Response: "}${q.message}`
//             )}
    
//             1. Use only HTML elements to create your response.
//             2. You can use the following HTML tags to format your response: <p>, <h1>, <h2>, <h3>, <ul>, <li>, <strong>, <em>, <a>.
//             3. Avoid using style or class attributes in your response.
//             4. Wrap your response within a single root element, such as a <div> tag.
//             5. Use the href attribute for links, and replace URLs with "#".
//             6. Be empathetic and clear in your communication. Provide necessary forms, requirements, or instructions.
//             7. If you do not have the specific information the customer is seeking, direct them to a resource or a contact number that can assist further.
    
//             Here is the customer's query:
    
//             ${query}
    
//             Please respond to this query while adhering to the rules and ensuring clarity and professionalism.
//         `;
//   };
  
//   const getPrompt = (message, oldConversations) => {
//     return `
//           You are a customer service representative and you are answering questions from our customers. Please follow the rules below and consider the customer's previous conversations to assist the customer.
  
//           Previous conversations of the customer:
  
//           ${oldConversations?.map(
//             (conv) =>
//               `${conv.isUser ? "Customer Question: " : "Your Answer: "}${
//                 conv.message
//               }`
//           )}
  
//           1. Create your response using only HTML elements.
//           2. You can use the following HTML tags to create your response: <p>, <h1>, <h2>, <h3>, <ul>, <li>, <strong>, <em>, <a>, <code>, <pre>, <img>.
//           3. Do not use style or class attributes in your response.
//           4. Create your response within a single root element, such as a <div> tag.
//           5. Use the href attribute for links and use "#" instead of actual URLs.
//           6. Respond to the customer's question politely, professionally, and helpfully.
//           7. If you do not have information about the question asked, kindly state this and direct the customer to another resource that can help.
  
//           Here is the customer's question:
  
//           ${message}
  
//           Please respond to this question in accordance with the rules above and finish the sentence.
//       `;
//   };
  
//   const generateId = () => {
//     return crypto.randomUUID();
//   };
  

  
//   const Message = ({ onClose }) => {
//     const [conversation, setConversation] = useState([]);
//     // const [capabilities, setCapabilities] = useState();
//     const [message, setMessage] = useState("");
//     const chatContainerRef = useRef<HTMLDivElement>(null);
//     const [isPending, setIsPending] = useState(false);
//     const [sector, setSector] = useState("");
  
//     const onFinish = async () => {
//       if (!window?.ai || !message) return;
//       const id = generateId();
//       try {
//         setIsPending(true);
  
//         const ai = window?.ai;
  
//         setConversation((prev) => [
//           ...prev,
//           { message, isUser: true, id, date: new Date().toISOString() },
//         ]);
  
//         const session = await ai.assistant.create();
  
//         let prompt = "";
  
//         if (sector === "Engineering") {
//           prompt = getEngineeringPrompt(message, conversation);
//         }
  
//         if (sector === "Insurance") {
//           prompt = getInsurancePrompt(message, conversation);
//         }
  
//         if (sector === "Customer Service") {
//           prompt = getPrompt(message, conversation);
//         }
  
//         const response = await session.prompt(prompt);
//         setConversation((prev) => [
//           ...prev,
//           {
//             message: response,
//             isUser: false,
//             id,
//             date: new Date().toISOString(),
//           },
//         ]);
  
//         session.destroy();
  
//         chatContainerRef.current?.scrollTo({
//           top: chatContainerRef.current.scrollHeight,
//           behavior: "smooth",
//         });
  
//         setMessage("");
//       } catch (error) {
//         setConversation((prev) => [
//           ...prev,
//           {
//             message: "An error occurred.",
//             isUser: false,
//             isError: true,
//             id,
//             date: new Date().toISOString(),
//           },
//         ]);
//       } finally {
//         setIsPending(false);
//       }
//     };
  
//     // const prepareCapabilities = () => {
//     //   getCapabilities().then(setCapabilities);
//     // };
  
//     // useEffect(() => {
//     //   const interval = setInterval(
//     //     () => {
//     //       prepareCapabilities();
//     //     },
//     //     1000 * 60 * 1 // 1 minute
//     //   );
  
//     //   return () => clearInterval(interval);
//     // }, []);
  
//     // useEffect(() => {
//     //   prepareCapabilities();
//     // }, []);
  
//     const { isAvailable, needDownload, isNotAvailable } = {
//       isAvailable: capabilities?.state?.available === "readily",
//       needDownload: capabilities?.state?.available === "after-download",
//       isNotAvailable: capabilities?.state?.available === "no" || !capabilities,
//     };
  
//     // useEffect(() => {
//     //   chatContainerRef.current?.scrollTo({
//     //     top: chatContainerRef.current.scrollHeight,
//     //     behavior: "smooth",
//     //   });
//     // }, [conversation]);
  
//     // const handleDeleteAll = () => {
//     //   setConversation([]);
//     //   setSector("");
//     //   toast({
//     //     title: "Success",
//     //     description: "All messages have been deleted.",
//     //   });
//     // };
  
//     // const getResponseTime = (id) => {
//     //   const userMessage = conversation.find((conv) => conv.id === id);
//     //   const aiMessage = conversation.find(
//     //     (conv) => conv.id === id && !conv.isUser
//     //   );
//     //   if (!userMessage || !aiMessage) return;
//     //   const userDate = new Date(userMessage.date);
//     //   const aiDate = new Date(aiMessage.date);
//     //   const diff = aiDate.getTime() - userDate.getTime();
//     //   return ` - Response Time: ${diff}ms (${diff / 1000}s)`;
//     // };
  
//     const renderContent = () => {
//     //   if (needDownload) {
//     //     return (
//     //       <ScrollArea viewportRef={chatContainerRef} className="h-[400px] p-2">
//     //         <AISetupGuide />
//     //       </ScrollArea>
//     //     );
//     //   }
  
//       if (!isAvailable || isNotAvailable) {
//         return (
//           <ScrollArea viewportRef={chatContainerRef} className="h-[400px] p-2">
//             <div className="px-6">
//               <Alert variant="destructive">
//                 <AlertDescription>
//                   {capabilities?.message || "AI Chatbot is not available."}
//                 </AlertDescription>
//               </Alert>
//             </div>
//             {/* <AISetupGuide /> */}
//           </ScrollArea>
//         );
//       }
  
//       if (!sector) {
//         return (
//           <div className="flex flex-col items-center justify-center flex-1 h-full my-auto gap-y-4 min-h-[400px]">
//             <MessageCircle className="w-12 h-12 text-gray-500" />
//             <p className="px-4 text-sm text-center text-gray-500">
//               Select a sector to start a conversation. Our AI Chatbot can assist
//               you with various fields such as Engineering, Insurance, and Customer
//               Service. Choose the relevant sector to get tailored support and
//               solutions.
//             </p>
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="outline" size="sm" className="gap-x-2">
//                   <Bot className="w-5 h-5" />
//                   Select Sector
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent>
//                 {sectors.map((sector) => (
//                   <DropdownMenuItem
//                     key={sector.name}
//                     onClick={() => setSector(sector.name)}
//                   >
//                     <FactoryIcon className="w-4 h-4 mr-2" />
//                     <span>{sector.name}</span>
//                   </DropdownMenuItem>
//                 ))}
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </div>
//         );
//       }
  
//       return (
//         <>
//           <ScrollArea className="h-[400px] px-2" viewportRef={chatContainerRef}>
//             <div className="h-full space-y-4">
//               {conversation?.length > 0 ? (
//                 conversation.map((item, index) => (
//                   <div
//                     key={index}
//                     className={cn(
//                       "flex gap-2",
//                       item.isUser ? "flex-row-reverse" : "flex-row"
//                     )}
//                   >
//                     <Avatar>
//                       <AvatarFallback>
//                         {item.isUser ? <UserIcon /> : "AI"}
//                       </AvatarFallback>
//                     </Avatar>
//                     <div>
//                       <div
//                         dangerouslySetInnerHTML={{ __html: item.message }}
//                         className={cn(
//                           "rounded-lg p-2 text-xs",
//                           item.isUser
//                             ? "bg-primary text-primary-foreground"
//                             : "bg-muted",
//                           item.isError &&
//                             "bg-destructive text-destructive-foreground"
//                         )}
//                       />
//                       {item.date && (
//                         <div
//                           title={new Date(item.date).toLocaleString()}
//                           className={cn(
//                             "flex items-center w-full mt-1 text-xs text-gray-500",
//                             item.isUser ? "justify-end" : "justify-start"
//                           )}
//                         >
//                           <Clock className="inline-block w-4 h-4 mr-1" />
//                           {new Date(item.date).toLocaleTimeString()}
//                           {!item.isUser && getResponseTime(item.id)}
//                         </div>
//                       )}
//                     </div>
//                     {item.isError && (
//                       <Button
//                         variant="ghost"
//                         size="icon"
//                         onClick={() => {
//                           setConversation((prev) =>
//                             prev.filter((conv) => conv.id !== item.id)
//                           );
//                         }}
//                       >
//                         <TrashIcon className="w-4 h-4" />
//                       </Button>
//                     )}
//                   </div>
//                 ))
//               ) : (
//                 <div className="flex flex-col items-center justify-center flex-1 h-full my-auto gap-y-4">
//                   <MessageCircle className="w-12 h-12 text-gray-500" />
//                   <p className="text-sm text-gray-500">
//                     Start a conversation with AI Chatbot.
//                   </p>
//                 </div>
//               )}
  
//               {isPending && (
//                 <div className="flex items-center space-x-4">
//                   <Skeleton className="w-12 h-12 rounded-full" />
//                   <div className="space-y-2">
//                     <Skeleton className="h-4 w-[250px]" />
//                     <Skeleton className="h-4 w-[200px]" />
//                   </div>
//                 </div>
//               )}
//             </div>
//           </ScrollArea>
  
//           <div className="flex items-center p-2 space-x-2">
//             <Input
//               disabled={isPending}
//               placeholder="Type your message"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               onKeyUp={(e) => e.key === "Enter" && onFinish()}
//             />
//             <DropdownMenu>
//               <div className="flex flex-row ">
//                 <Button
//                   size="icon"
//                   variant={"ghost"}
//                   disabled={isPending || !message}
//                   onClick={onFinish}
//                 >
//                   <SendIcon className="w-4 h-4 text-primary hover:text-primary/90" />
//                 </Button>
  
//                 <DropdownMenuTrigger asChild>
//                   <Button size="icon" variant={"ghost"} disabled={isPending}>
//                     <EllipsisVertical className="w-4 h-4" />
//                   </Button>
//                 </DropdownMenuTrigger>
//               </div>
//               <DropdownMenuContent>
//                 {/* <DropdownMenuItem
//                   disabled={isPending || conversation.length === 0}
//                   onClick={handleDeleteAll}
//                 >
//                   <TrashIcon className="w-4 h-4 mr-2" />
//                   <span>Delete all messages</span>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem disabled={isPending} onClick={handleDeleteAll}>
//                   <FactoryIcon className="w-4 h-4 mr-2" />
//                   <span>Change sector</span>
//                 </DropdownMenuItem> */}
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </div>
//         </>
//       );
//     };
  
//     const renderStatus = () => {
//       if (!capabilities?.isChrome) {
//         return {
//           text: "🔴",
//           description: "AI Chatbot is only available on Google Chrome.",
//         };
//       }
//       if (isAvailable) {
//         return {
//           text: "🟢",
//           description: "AI Chatbot is ready to use.",
//         };
//       }
//       if (needDownload) {
//         return {
//           text: "🟠",
//           description: "Necessary setup is required for AI Chatbot usage.",
//         };
//       }
//       if (isNotAvailable) {
//         return {
//           text: "🔴",
//           description: "AI Chatbot is not ready to use.",
//         };
//       }
  
//       return {
//         text: "🟠",
//         description: "Necessary setup is required for AI Chatbot usage.",
//       };
//     };
  
//     return (
//       <Card className="w-[400px] overflow-hidden">
//         <CardHeader className="flex flex-row items-center justify-between p-2 m-2 space-y-0 rounded-lg bg-primary">
//           <div className="relative">
//             <Avatar>
//               <AvatarFallback>AI</AvatarFallback>
//             </Avatar>
//             <Tooltip>
//               <TooltipTrigger asChild>
//                 <Button
//                   variant="text"
//                   size="sm"
//                   className="absolute z-50 -top-2 -right-4"
//                 >
//                   {renderStatus().text}
//                 </Button>
//               </TooltipTrigger>
//               <TooltipContent>{renderStatus().description}</TooltipContent>
//             </Tooltip>
//           </div>
//           <CardTitle className="text-sm font-medium text-white dark:text-black">
//             NoFail AI Chatbot
//           </CardTitle>
//           <Button
//             variant="ghost"
//             size="sm"
//             onClick={onClose}
//             className="text-white dark:text-black dark:hover:text-white"
//           >
//             <XIcon className="w-4 h-4" />
//           </Button>
//         </CardHeader>
//         <CardContent className="p-0 mb-2">{renderContent()}</CardContent>
//       </Card>
//     );
//   };
  
//   const AIChatBot = () => {
//     const [open, setOpen] = useState(false);
  
//     return (
//       <Popover open={open} onOpenChange={setOpen}>
//         <TooltipProvider>
//           <Tooltip>
//             <TooltipTrigger asChild>
//               <PopoverTrigger asChild>
//                 <Button
//                   onClick={() => setOpen((prev) => !prev)}
//                   variant="outline"
//                   className="w-[60px] h-[60px] rounded-full fixed bottom-4 right-8 p-0 border-2 border-primary"
//                 >
//                   <Bot />
//                 </Button>
//               </PopoverTrigger>
//             </TooltipTrigger>
//             <TooltipContent>
//               <p>Start chatting with NoFail Chatbot.</p>
//               {/* <TooltipArrow /> */}
//             </TooltipContent>
//           </Tooltip>
//         </TooltipProvider>
  
//         <PopoverContent className="w-[400px] p-0">
//           <Message onClose={() => setOpen(false)} />
//           {/* <PopoverArrow /> */}
//         </PopoverContent>
//       </Popover>
//     );
//   };
  
//   const AIChatBotWrapper = () => {
//     return (
//       <div className="w-full">
//         <AIChatBot />
//       </div>
//     );
//   };
  
//   export default AIChatBotWrapper;
   

// // function ChatBot() {




// //     return (
// // <h2>AI</h2>
// //     );
// //   };
  
// //   export default ChatBot


const Message = () => {
    const [conversation, setConversation] = useState([]);
    const [message, setMessage] = useState("");
    const [isPending, setIsPending] = useState(false);
    const [sector, setSector] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const chatContainerRef = useRef(null);
  
    const handleSendMessage = async () => {
      if (!message || !sector) return;
      const newMessage = {
        message,
        isUser: true,
        id: crypto.randomUUID(),
        date: new Date().toISOString(),
      };
  
      setConversation((prev) => [...prev, newMessage]);
  
      setIsPending(true);
  
      try {
        // Simulate AI response generation
        const responseMessage = {
          message: `<div><p>This is an AI-generated response for sector: ${sector}</p></div>`,
          isUser: false,
          id: crypto.randomUUID(),
          date: new Date().toISOString(),
        };
  
        setTimeout(() => {
          setConversation((prev) => [...prev, responseMessage]);
          chatContainerRef.current?.scrollTo({
            top: chatContainerRef.current.scrollHeight,
            behavior: "smooth",
          });
          setIsPending(false);
        }, 1000);
      } catch (error) {
        setConversation((prev) => [
          ...prev,
          {
            message: `<div><p>An error occurred. Please try again.</p></div>`,
            isUser: false,
            isError: true,
            id: crypto.randomUUID(),
            date: new Date().toISOString(),
          },
        ]);
        setIsPending(false);
      }
  
      setMessage("");
    };
  
    const resetState = () => {
      setConversation([]);
      setMessage("");
      setSector("");
    };
  
    const renderContent = () => {
      if (!sector) {
        return (
          <div className="flex flex-col items-center justify-center flex-1 h-full my-auto gap-y-4 min-h-[400px]">
            <MessageCircle className="w-12 h-12 text-gray-500" />
            <p className="px-4 text-sm text-center text-gray-500">
              Select a sector to start a conversation.
            </p>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-x-2">
                  <Bot className="w-5 h-5" />
                  Select Sector
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {sectors.map((sector) => (
                  <DropdownMenuItem
                    key={sector.name}
                    onClick={() => setSector(sector.name)}
                  >
                    <FactoryIcon className="w-4 h-4 mr-2" />
                    <span>{sector.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        );
      }
  
      return (
        <ScrollArea className="h-[400px] px-2" viewportRef={chatContainerRef}>
          <div className="h-full space-y-4">
            {conversation.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "flex gap-2",
                  item.isUser ? "flex-row-reverse" : "flex-row"
                )}
              >
                <Avatar>
                  <AvatarFallback>
                    {item.isUser ? <UserIcon /> : <img src={aiuser} alt="" /> }
                  </AvatarFallback>
                </Avatar>
                <div
                  dangerouslySetInnerHTML={{ __html: item.message }}
                  className={cn(
                    "rounded-lg p-2 text-xs",
                    item.isUser
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted",
                    item.isError &&
                      "bg-destructive text-destructive-foreground"
                  )}
                />
              </div>
            ))}
          </div>
        </ScrollArea>
      );
    };
  
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
            {/* Input Box Section */}
            {sector && (
              <div className="mt-4 flex items-center gap-2 p-2 border-t-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={`Send a message to ${sector} support...`}
                  className="flex-1 border p-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#3835ED]"
                  required
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={isPending}
                  className="bg-transparent hover:bg-transparent text-black text-[30px]"
                >
                  {isPending ? "..." : <img src={sendbot} className="hover:bg-white "  alt="" /> }
                </Button>
              </div>
            )} 
          </div>
        )}
      </>
    );
  };


  export default Message 