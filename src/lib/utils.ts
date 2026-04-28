import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { createElement } from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function externalLink(text: string, url: string) {
  return createElement(
    "a",
    {
      href: url,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "text-[#00ae9d] hover:text-[#2d4258]",
    },
    text
  );
}

export function getApiUrl(): string {
  const apiUrl = import.meta.env.VITE_API_URL || "";
  if (!apiUrl) {
    console.warn("VITE_API_URL is not defined");
    return "";
  }
  return apiUrl;
}

export function getBaseUrl(): string {
  const apiUrl = import.meta.env.VITE_API_URL || "";
  if (!apiUrl) {
    console.warn("VITE_API_URL is not defined");
    return "";
  }
  return apiUrl.replace(/\/api\/?$/, "");
}
