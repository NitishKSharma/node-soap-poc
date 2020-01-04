import { WebApp } from "@nivinjoseph/n-web";
import { ConfigurationManager } from "@nivinjoseph/n-config";
import { AppComponentInstaller } from "./app-component-installer";



const server = new WebApp(Number.parseInt(ConfigurationManager.getConfig<number>("PORT") as any)); 
server
    .useInstaller(new AppComponentInstaller())
    .enableCors();

server.bootstrap();