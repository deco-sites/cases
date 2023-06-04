import type { HTML } from "deco-sites/std/components/types.ts";
import Quilltext from "deco-sites/std/components/QuillText.tsx";

import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Message {
  from: "tavano" | "jonatas";
  message: HTML;
  image?: LiveImage;
  imageLink?: string;
}

export interface Props {
  messages: Message[];
}

export default function Chat({ messages }: Props) {
  return (
    <div class="relative flex justify-center">
      <img
        src="celular.webp"
        alt=""
        class="hidden sm:block h-[100vh] mx-auto"
      />
      <div class="sm:max-w-[44vh] max-h-[100vh] sm:max-h-[92vh] whatsapp relative sm:absolute sm:top-[4vh] overflow-auto scrollbar-none sm:rounded-[5vh]">
        <header class="flex justify-start items-center w-full bg-[#075E54] h-[80px] px-4 fixed sm:top-[4vh] sm:max-w-[44vh] sm:rounded-t-[5vh]">
          <img src="/deco.png" alt="" class="rounded-full w-[50px]" />
          <div class="ml-4">
            <h1 class="text-white font-semibold text-[22px]">
              deco.cx developers
            </h1>
            <p class="text-white mt-[-5px] text-[14px]">
              Jonatas Venâncio, Guilherme Tavano
            </p>
          </div>
          <details class="absolute right-[40px]">
            <summary class="summary-whats cursor-pointer">
              <div class="flex flex-col gap-1">
                <span class="w-[5px] h-[5px] bg-white rounded-full"></span>
                <span class="w-[5px] h-[5px] bg-white rounded-full"></span>
                <span class="w-[5px] h-[5px] bg-white rounded-full"></span>
              </div>
            </summary>
            <ul class="bg-[#273239] p-4 text-white flex flex-col justify-between gap-6 absolute right-[-40px] top-[40px] w-[250px] ">
              <li class="flex gap-4">
                Jonatas Venâncio
                <a href="https://www.linkedin.com/in/jonatas-venancio-dev/" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="20px" width="20px" version="1.1" id="Layer_1" viewBox="0 0 310 310">
                    <g id="XMLID_801_">
                      <path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73   C77.16,101.969,74.922,99.73,72.16,99.73z"/>
                      <path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4   c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"/>
                      <path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599   c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319   c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995   C310,145.43,300.549,94.761,230.454,94.761z"/>
                    </g>
                  </svg> 
                </a>
              </li>
              <li class="flex gap-4">
                Guilherme Tavano
                <a href="https://www.linkedin.com/in/guitavano/" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="20px" width="20px" version="1.1" id="Layer_1" viewBox="0 0 310 310">
                    <g id="XMLID_801_">
                      <path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73   C77.16,101.969,74.922,99.73,72.16,99.73z"/>
                      <path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4   c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"/>
                      <path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599   c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319   c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995   C310,145.43,300.549,94.761,230.454,94.761z"/>
                    </g>
                  </svg> 
                </a>
              </li>
            </ul>
          </details>
          
        </header>
        <main class="flex flex-col px-4 gap-4 py-4 pt-[100px]">
          {messages?.map((message) => {
            return (
              <div class="flex gap-2 items-end">
                <div>
                  <img
                    src={message.from == "jonatas"
                      ? "/jonatas.jpg"
                      : "tavano.jpg"}
                    alt=""
                    class="min-w-[40px] w-[40px] rounded-full"
                  />
                </div>
                <div class="triangle-to-the-left">
                </div>
                <div class="bg-[#202c33] text-white rounded-[10px]">
                  {message.image && (
                    <div class="px-2 pt-2 min-h-[170px]">
                      <a href={message.imageLink} target="_blank">
                         <img src={message.image} alt="" />
                      </a>
                    </div>
                  )}
                  <div class="py-2 px-3">
                    <Quilltext html={message.message} />
                  </div>
                </div>
              </div>
            );
          })}
        </main>
      </div>
    </div>
  );
}
