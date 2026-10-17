import type { IconName } from "@/components/ui/Icon";

/**
 * Central social-link configuration. Components never hardcode social URLs:
 * they read `activeSocialLinks`, which only contains links that have an
 * official URL. A platform with `href: null` is prepared but not rendered.
 */
export type SocialPlatform = "instagram" | "youtube";

export type SocialLink = {
  platform: SocialPlatform;
  label: string;
  icon: IconName;
  /**
   * The client's exact, official profile URL, or null until it is supplied.
   * Never guess a URL or use a generic platform home page.
   */
  href: string | null;
};

export const socialLinks: readonly SocialLink[] = [
  {
    platform: "instagram",
    label: "Instagram",
    icon: "instagram",
    // TODO(client): paste the exact Instagram profile URL supplied by the client.
    href: null,
  },
  {
    platform: "youtube",
    label: "YouTube",
    icon: "youtube",
    // TODO(client): paste the exact YouTube channel URL once the client shares it.
    href: null,
  },
];

export type ActiveSocialLink = SocialLink & { href: string };

export const activeSocialLinks: readonly ActiveSocialLink[] = socialLinks.filter(
  (link): link is ActiveSocialLink => Boolean(link.href),
);
