import {DeleteModal} from "./components/cancel-modal/DeleteModal.tsx";

export function App() {
  return (
    <>
      <header className={'p-4 bg-sky-600'}>
        <h1 className={'font-bold text-4xl'}>Modal demo</h1>
      </header>
      <main className={'p-4'}>
        <DeleteModal/>
      </main>
    </>
  )
}
