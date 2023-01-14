import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function Modalpage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <Button onClick={handleClose} primary>
      I Accept
    </Button>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div className="relative">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis animi
      dolorem, officiis voluptatibus repellendus, vero neque quaerat nemo magnam
      aliquam nihil aut voluptate sequi! Ullam aperiam iusto totam. Alias,
      fuga.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
      animi dolorem, officiis voluptatibus repellendus, vero neque quaerat nemo
      magnam aliquam nihil aut voluptate sequi! Ullam aperiam iusto totam.
      Alias, fuga.Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Reiciendis animi dolorem, officiis voluptatibus repellendus, vero neque
      quaerat nemo magnam aliquam nihil aut voluptate sequi! Ullam aperiam iusto
      totam. Alias, fuga.Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Reiciendis animi dolorem, officiis voluptatibus repellendus, vero
      neque quaerat nemo magnam aliquam nihil aut voluptate sequi! Ullam aperiam
      iusto totam. Alias, fuga.Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Reiciendis animi dolorem, officiis voluptatibus
      repellendus, vero neque quaerat nemo magnam aliquam nihil aut voluptate
      sequi! Ullam aperiam iusto totam. Alias, fuga.Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Reiciendis animi dolorem, officiis
      voluptatibus repellendus, vero neque quaerat nemo magnam aliquam nihil aut
      voluptate sequi! Ullam aperiam iusto totam. Alias, fuga.Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Reiciendis animi dolorem, officiis
      voluptatibus repellendus, vero neque quaerat nemo magnam aliquam nihil aut
      voluptate sequi! Ullam aperiam iusto totam. Alias, fuga.Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Reiciendis animi dolorem, officiis
      voluptatibus repellendus, vero neque quaerat nemo magnam aliquam nihil aut
      voluptate sequi! Ullam aperiam iusto totam. Alias, fuga.Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Reiciendis animi dolorem, officiis
      voluptatibus repellendus, vero neque quaerat nemo magnam aliquam nihil aut
      voluptate sequi! Ullam aperiam iusto totam. Alias, fuga.Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Reiciendis animi dolorem, officiis
      voluptatibus repellendus, vero neque quaerat nemo magnam aliquam nihil aut
      voluptate sequi! Ullam aperiam iusto totam. Alias, fuga.Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Reiciendis animi dolorem, officiis
      voluptatibus repellendus, vero neque quaerat nemo magnam aliquam nihil aut
      voluptate sequi! Ullam aperiam iusto totam. Alias, fuga.Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Reiciendis animi dolorem, officiis
      voluptatibus repellendus, vero neque quaerat nemo magnam aliquam nihil aut
      voluptate sequi! Ullam aperiam iusto totam. Alias, fuga.Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Reiciendis animi dolorem, officiis
      voluptatibus repellendus, vero neque quaerat nemo magnam aliquam nihil aut
      voluptate sequi! Ullam aperiam iusto totam. Alias, fuga.Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Reiciendis animi dolorem, officiis
      voluptatibus repellendus, vero neque quaerat nemo magnam aliquam nihil aut
      voluptate sequi! Ullam aperiam iusto totam. Alias, fuga.Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Reiciendis animi dolorem, officiis
      voluptatibus repellendus, vero neque quaerat nemo magnam aliquam nihil aut
      voluptate sequi! Ullam aperiam iusto totam. Alias, fuga.Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Reiciendis animi dolorem, officiis
      voluptatibus repellendus, vero neque quaerat nemo magnam aliquam nihil aut
      voluptate sequi! Ullam aperiam iusto totam. Alias, fuga.Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Reiciendis animi dolorem, officiis
      voluptatibus repellendus, vero neque quaerat nemo magnam aliquam nihil aut
      voluptate sequi! Ullam aperiam iusto totam. Alias, fuga.Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Reiciendis animi dolorem, officiis
      voluptatibus repellendus, vero neque quaerat nemo magnam aliquam nihil aut
      voluptate sequi! Ullam aperiam iusto totam. Alias, fuga.
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
}

export default Modalpage;
