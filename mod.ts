import { Application, Router } from "./deps.ts"

const _respond = (data: any, status: boolean = true): any => {
    return {
        status,
        data
    }
}

const router = new Router();
router.get("/", (ctx: any) => {
    ctx.response.body = _respond({ message: 'hello, friend!'});
});
router.post("/auth/login", (ctx: any) => {
    ctx.response.body = _respond({ message: 'hello, friend!'});
});
router.post("/auth/logout", (ctx: any) => {
    ctx.response.body = _respond({ message: 'hello, friend!'});
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener(
    "listen",
    (e: any) => console.log("Listening on http://localhost:8080"),
);
await app.listen({ port: 8080 });
