import Message from "../../components/Messages/Message";

export default function Messages() {
  return (
    <section>
      <div className="flex flex-col space-y-4">
        <Message message="Hello World" time="1400/02/14 14:10:25"/>
        <Message message="Hello World" time="1400/02/14 14:10:25"/>
        <Message message="Hello World" time="1400/02/14 14:10:25"/>
        <Message message="Hello World" time="1400/02/14 14:10:25"/>
      </div>
    </section>
  );
}
