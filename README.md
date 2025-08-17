# ts-db-electric-preload-issue

## Setup

```bash
docker compose up -d
bun i
bun push
bun dev
```

## Fill random data constantly

```bash
bun run src/randomize-data.ts
```

## Video

### Expected Behavior

https://github.com/user-attachments/assets/b044d353-d28d-4eb3-ab14-9f6b29beb231

### Actual Behavior (after a while, 5/10m in background)

The route does not change cause it's still in `pending` (loader stuck)

https://github.com/user-attachments/assets/99ee78e9-72c8-40f5-83e3-96dbad479474

