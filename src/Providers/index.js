import { ClientProvider } from "./Client";

const Providers = ({ children }) => {
  return <ClientProvider>{children}</ClientProvider>;
};

export default Providers;
