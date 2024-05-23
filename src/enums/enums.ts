export enum ServiceProvider {
  GOOGLE = "google-oauth2",
  FACEBOOK = "facebook",
  GITHUB = "github",
  LINKEDIN = "linkedin",
  TWITTER = "twitter",
}

export const serviceProviderMap = {
  [ServiceProvider.GOOGLE]: "Google",
  [ServiceProvider.FACEBOOK]: "Facebook",
  [ServiceProvider.GITHUB]: "Github",
  [ServiceProvider.LINKEDIN]: "Linkedin",
  [ServiceProvider.TWITTER]: "Twitter",
};
