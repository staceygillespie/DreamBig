import type { TinaField } from "tinacms";
export function aboutFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "image",
      name: "featured_image",
      label: "featured_image",
    },
  ] as TinaField[];
}
export function contactFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "image",
      name: "featured_image",
      label: "featured_image",
    },
    {
      type: "boolean",
      name: "omit_header_text",
      label: "omit_header_text",
    },
    {
      type: "string",
      name: "type",
      label: "type",
    },
  ] as TinaField[];
}
export function pageFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "image",
      name: "featured_image",
      label: "featured_image",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "string",
      name: "verification",
      label: "verification",
    },
  ] as TinaField[];
}
export function postFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "image",
      name: "featured_image",
      label: "featured_image",
    },
    {
      type: "string",
      name: "tags",
      label: "tags",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "boolean",
      name: "disable_share",
      label: "disable_share",
    },
  ] as TinaField[];
}
