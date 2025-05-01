import { Container } from "../container/container";

export default function Featured() {
  return (
    <>
      <div className="bg-Black_folio">
        <Container className=" grid grid-cols-12 gap-24 py-24 "  >
          <div className="bg-black  h-90 col-span-7"></div>
          <div className="bg-primary_folio h-90 col-span-5"></div>
        </Container>
      </div>
    </>
  );
}
