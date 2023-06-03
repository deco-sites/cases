import type { HTML } from "deco-sites/std/components/types.ts";
import Quilltext from "deco-sites/std/components/QuillText.tsx";

import type { Image as LiveImage } from "deco-sites/std/components/types.ts";


export interface Message{
    from: "tavano" | "jonatas";
    message: HTML;
    image?: LiveImage;
}

export interface Props{
    messages: Message[];
}

export default function Chat({ messages } :  Props){

    return(
        <div class="relative flex justify-center">
            <img src="celular.webp" alt="" class="hidden sm:block h-[100vh] mx-auto" />
            <div class="max-w-[440px] sm:max-h-[92vh] whatsapp relative sm:absolute sm:top-[4vh] sm:overflow-auto sm:rounded-[57px]">
                <header class="flex justify-start items-center w-full bg-[#075E54] h-[80px] px-4 fixed sm:absolute top-0">
                    <img src="/deco.png" alt="" class="rounded-full w-[50px]" />
                    <div class="ml-4">
                        <h1 class="text-white font-semibold text-[22px]">Deco Developers</h1>
                        <p class="text-white mt-[-5px] text-[14px]">Jonatas Venâncio, Guilherme Tavano</p>
                    </div>
                </header>
                <main class="flex flex-col px-4 gap-4 py-4 pt-[100px]">
                    {
                        messages?.map(message => {

                            return(
                                <div class="flex gap-2 items-end">
                                    <div>
                                        <img src={message.from == "jonatas" ? "/jonatas.jpg" : "tavano.jpg" } alt="" class="min-w-[40px] w-[40px] rounded-full"/>
                                    </div>
                                    <div class="bg-[#202c33] text-white rounded-[10px]">
                                        {
                                            message.image &&  <div class="px-2 pt-2 min-h-[170px]">
                                            <img src={message.image} alt="" />
                                        </div>
                                        }
                                        <div class="py-2 px-3">
                                            <Quilltext html={message.message}/>
                                        </div>
                                        
                                    </div>
                                </div>
                            )
                        })
                    }
                </main>
            </div>
        </div>
    )
}