import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: "tkzk6kkm",
    dataset: "production",
    apiVersion: "2023-10-12",
    useCdn: true,
})