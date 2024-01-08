type Props = {
  children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="h-screen w-screen p-16 flex items-center">{children}</div>
  );
};

export default MainLayout;
