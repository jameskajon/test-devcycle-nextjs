import ServerComponent from "@/lib/server-component";
import ClientComponent from "@/lib/client-component";

export default function Home() {
  return (
    <main>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        <div>
          <ClientComponent />
        </div>
        <div>
          <ServerComponent />
        </div>
      </div>
    </main>
  );
}
