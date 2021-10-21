import { Application, Router, oakCors } from "./deps.ts";
import { entityCollection } from "./entities.mock.ts";

const _respond = (data: any, status: boolean = true): any => {
  return {
    status,
    data,
  };
};

const router = new Router();
router.get("/", (ctx: any) => {
  ctx.response.body = _respond({ message: "hello, friend!" });
});
router.post("/auth/login", (ctx: any) => {
  ctx.response.body = _respond({
    token: crypto.randomUUID(),
    name: "Katheryn Birkhoff",
    email: "katheryn.birkhoff@example.com",
  });
});
router.post("/auth/logout", (ctx: any) => {
  ctx.response.body = _respond({ message: "hello, friend!" });
});
router.get("/entities", (ctx: any) => {
  ctx.response.body = _respond(Array.from(entityCollection.values()));
});
router.get("/entities/:id", (ctx: any) => {
  if (ctx.params && ctx.params.id && entityCollection.has(+ctx.params.id)) {
    ctx.response.body = _respond(entityCollection.get(+ctx.params.id));
  }
});

const app = new Application();

app.use(oakCors())

// Logger
app.use(async (ctx: any, next: any) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

// Timing
app.use(async (ctx: any, next: any) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener(
  "listen",
  (e: any) => console.log("Listening on http://localhost:8080"),
);
await app.listen({ port: 8080 });
