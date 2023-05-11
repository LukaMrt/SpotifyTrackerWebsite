import {NestFactory} from "@nestjs/core";
import {FastifyAdapter, NestFastifyApplication,} from "@nestjs/platform-fastify";
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter()
    );

    const config = new DocumentBuilder()
        .setTitle("SpotifyTracker")
        .setDescription("API related to my spotify tracker app")
        .setVersion("0.1.0")
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("api", app, document);

    await app.listen(3003, "0.0.0.0");
}

bootstrap()
    .then(() => console.log("Application is running"))
    .catch((e) => console.error(e));
