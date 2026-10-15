# vinext app

This project was created with create-vinext-app.

## Scripts

- `pnpm run dev` starts the vinext dev server.
- `pnpm run build` builds the Cloudflare Worker output.
- `pnpm run start` starts the built Worker locally with Wrangler.
- `pnpm run deploy` deploys the Cloudflare Worker.

## Contact form email

The contact form sends messages through Resend from the Cloudflare Worker. It
uses the `CONTACT_FROM_EMAIL` and `CONTACT_TO_EMAIL` Worker environment
bindings. The current sender, `Portfolio Contact <onboarding@resend.dev>`, is
for testing and can only deliver to the email address associated with your
Resend account.

Set the Resend API key and the recipient address associated with that account
as Worker secrets. The sender is also stored as a Worker secret, so it can be
changed without editing application code:

```sh
npx wrangler secret put RESEND_API_KEY
npx wrangler secret put CONTACT_TO_EMAIL
npx wrangler secret put CONTACT_FROM_EMAIL
```

Wrangler prompts for each value. Enter `Portfolio Contact
<onboarding@resend.dev>` for the sender. For local development, create a
gitignored `.dev.vars` file:

```dotenv
RESEND_API_KEY=re_your_api_key
CONTACT_TO_EMAIL=your_resend_account_email@example.com
CONTACT_FROM_EMAIL="Portfolio Contact <onboarding@resend.dev>"
```
