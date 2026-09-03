/** Public VAPID key — safe to ship in the client. The private key lives in Cloud Functions secrets. */
export const VAPID_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY ??
  "BAco4Gx0uhaEqNS6SywUb5qpfCtvtsdvQgUiuzfHNzghvJz9LrXK5--mQ51zmTaMK9M8LkqJc4CPAf4JbHmbPgY";
