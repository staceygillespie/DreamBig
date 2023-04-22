import { defineConfig } from "tinacms";
import { aboutFields } from "./templates";
import { contactFields } from "./templates";
import { pageFields } from "./templates";
import { postFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "b056dbff-abf4-4312-9df6-2cb55b680326", // Get this from tina.io
  token: "71392ee0151ccdb1a4be6bfa7f59cd869e3c168d", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Pages",
        name: "pages",
        path: "content",
        frontmatterFormat: "yaml",
        match: {
          include: "*",
        },
        templates: [
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...aboutFields(),
            ],
            label: "about",
            name: "about",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...contactFields(),
            ],
            label: "contact",
            name: "contact",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...pageFields(),
            ],
            label: "page",
            name: "page",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...postFields(),
            ],
            label: "post",
            name: "post",
          },
        ],
      },
      {
        format: "md",
        label: "Projects",
        name: "projects",
        path: "content/projects",
        frontmatterFormat: "yaml",
        match: {
          include: "*",
          exclude: "_index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...postFields(),
        ],
      },
    ],
  },
});
