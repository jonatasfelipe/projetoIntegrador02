import Caminho from "../components/Caminho/Caminho.component";
import {
  Stepper,
  Step,
  StepLabel,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import styled from "styled-components";
import React from "react";
import { BuscaCep } from "./components/buscaCep/buscaCep.component";
import { ConfirmAddress } from "./components/confirmAddress/confirmAddress.component";
import { Volume } from "./components/volume/volume.component";
import { Contact } from "./components/contact/contact.component";
import { Finish } from "./components/finish/finish.component";

const steps = [
  {
    key: 1,
    label: "Endereço da retirada",
  },
  {
    key: 2,
    label: "Volume de itens",
  },
  {
    key: 3,
    label: "Informações de contato",
  },
];

const theme = createTheme({
  palette: {
    primary: {
      main: "#0094FF",
    },
  },
});

const StepIcon = styled.div<{ activeBG: boolean }>`
  background-color: ${({ activeBG }) => (activeBG ? "#0094FF" : "#F3F3F3")};
  color: ${({ activeBG }) => (activeBG ? "#F3F3F3" : "#AFAFAF")};
  width: 40px;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  font-size: 20px;
  border-radius: 50%;
  margin-top: -10px;
  font-weight: 500;
  z-index: 1;
`;

export interface IAddress {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}
export const newAddress = {
    cep: "",
    logradouro: "",
    complemento: "",
    bairro: "",
    localidade: "",
    uf: "",
    ibge: "",
    gia: "",
    ddd: "",
    siafi: "",
  }

export function LocalRetirada() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [address, setAddress] = React.useState<IAddress>(newAddress);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Caminho atual="Local Retirada" />
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          style={{ marginTop: 50 }}
        >
          {steps.map((step, index) => (
            <Step key={step.key}>
              <StepLabel
                icon={
                  <StepIcon
                    activeBG={activeStep === index || index < activeStep}
                  >
                    <p>{index + 1}</p>
                  </StepIcon>
                }
              >
                <span
                  style={{
                    color:
                      activeStep === index || index < activeStep
                        ? "#0094FF"
                        : "#AFAFAF",
                    fontSize: 18,
                  }}
                >
                  {step.label}
                </span>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>

      {!address?.cep && <BuscaCep setAddress={setAddress} />}
      {address?.cep && activeStep === 0 && (
        <ConfirmAddress
          setActiveStep={setActiveStep}
          setAddress={setAddress}
          address={address}
        />
      )}
      {activeStep === 1 && <Volume setActiveStep={setActiveStep} />}
      {activeStep === 2 && <Contact setActiveStep={setActiveStep} />}
      {activeStep === 3 && <Finish />}
    </ThemeProvider>
  );
}
