import { IAddress, newAddress } from "../../LocalRetirada";
export function ConfirmAddress({
  setAddress,
  address,
  setActiveStep,
}: {
  setAddress: React.Dispatch<React.SetStateAction<IAddress>>;
  address: IAddress;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <>
      <h1 style={{ fontSize: 48, textAlign: "center" }}>Confirme o endereço</h1>
      <p style={{ fontSize: 18, textAlign: "center" }}>
        O endereço informado está correto?
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 1000,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            backgroundColor: "#F0F0F0",
            padding: 16,
            borderRadius: 5,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
              margin: 10,
            }}
          >
            <span style={{ fontWeight: "bold", marginRight: 5 }}>CEP:</span>
            <span>{address.cep}</span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
              margin: 10,
            }}
          >
            <span style={{ fontWeight: "bold", marginRight: 5 }}>Rua:</span>
            <span>{address.logradouro}</span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
              margin: 10,
            }}
          >
            <span style={{ fontWeight: "bold", marginRight: 5 }}>Bairro:</span>
            <span>{address.bairro}</span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
              margin: 10,
            }}
          >
            <span style={{ fontWeight: "bold", marginRight: 5 }}>Cidade:</span>
            <span>{address.localidade}</span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
              margin: 10,
            }}
          >
            <span style={{ fontWeight: "bold", marginRight: 5 }}>Estado:</span>
            <span>{address.uf}</span>
          </div>
        </div>

        <button
          onClick={() => setActiveStep(1)}
          style={{
            backgroundColor: "#0097F5",
            color: "white",
            flex: 1,
            border: "none",
            padding: 16,
            fontSize: 16,
            marginTop: 10,
            borderRadius: 5,
          }}
        >
          Sim, continuar
        </button>
        <button
          onClick={() => setAddress(newAddress)}
          style={{
            backgroundColor: "transparent",
            flex: 1,
            padding: 16,
            fontSize: 16,
            marginTop: 10,
            borderRadius: 5,
            color: "#0097F5",
            border: "3px solid #0097F5",
          }}
        >
          Não, editar
        </button>
      </div>
    </>
  );
}
