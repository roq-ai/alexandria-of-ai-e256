interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Content Curator'],
  customerRoles: ['Subscriber'],
  tenantRoles: ['Content Curator'],
  tenantName: 'Organization',
  applicationName: 'Alexandria of AI',
  addOns: ['notifications', 'chat'],
};
