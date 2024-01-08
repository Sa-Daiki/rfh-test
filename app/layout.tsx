import "./styles/globals.css";

type Props = {
  children: React.ReactNode;
};

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="w-screen h-screen">
          <main className="flex flex-col m-10">{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
