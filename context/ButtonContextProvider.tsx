import React, { createContext, FC, ReactNode, useState } from "react";

export interface IButtonContext {
  imageUrls: string[];
  setImageUrls: React.Dispatch<React.SetStateAction<string[]>>;
}

export const ButtonContext = createContext<IButtonContext>({
  imageUrls: [],
  setImageUrls: () => {},
});

export const ButtonContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  return (
    <ButtonContext.Provider value={{ imageUrls, setImageUrls }}>
      {children}
    </ButtonContext.Provider>
  );
};
