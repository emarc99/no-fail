import Shop from "../components/ShopProduct";
import AIChatBotWrapper from "../components/ChatBot";

export default function Products() {
  return (
    <>
      <div className="flex ">
        <div className="flex flex-col gap-4 flex-1 items-center justify-center pt-[5rem]">
          <AIChatBotWrapper mode="SHOPPING" />
          <Shop />

          <p className="mt-10 text-center font-medium text-[#000000B2] text-[16px]">
            © 2024 Nofail Team, Inc.
          </p>
        </div>
      </div>
    </>
  );
}
