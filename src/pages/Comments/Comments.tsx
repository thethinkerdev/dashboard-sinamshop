import Title from "../../components/Title";
import Comment, {
  Props as CommentProps,
} from "../../components/Comment/Comment";
import OrderBy from "../../components/Buttons/OrderBy";
import Filter from "../../components/Buttons/Filter";

export default function Comments() {
  const comments: CommentProps[] = [
    {
      username: "saman",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni consectetur amet unde ullam aliquam sint, atque necessitatibus officia. Labore aspernatur distinctio ut consectetur dolore aperiam reiciendis asperiores eos commodi fugiat?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni consectetur amet unde ullam aliquam sint, atque necessitatibus officia. Labore aspernatur distinctio ut consectetur dolore aperiam reiciendis asperiores eos commodi fugiat?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni consectetur amet unde ullam aliquam sint, atque necessitatibus officia. Labore aspernatur distinctio ut consectetur dolore aperiam reiciendis asperiores eos commodi fugiat?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni consectetur amet unde ullam aliquam sint, atque necessitatibus officia. Labore aspernatur distinctio ut consectetur dolore aperiam reiciendis asperiores eos commodi fugiat?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni consectetur amet unde ullam aliquam sint, atque necessitatibus officia. Labore aspernatur distinctio ut consectetur dolore aperiam reiciendis asperiores eos commodi fugiat?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni consectetur amet unde ullam aliquam sint, atque necessitatibus officia. Labore aspernatur distinctio ut consectetur dolore aperiam reiciendis asperiores eos commodi fugiat?",
    },

    {
      username: "saman",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni consectetur amet unde ullam aliquam sint, atque necessitatibus officia. Labore aspernatur distinctio ut consectetur dolore aperiam reiciendis asperiores eos commodi fugiat?",
    },
    {
      username: "saman",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni consectetur amet unde ullam aliquam sint, atque necessitatibus officia. Labore aspernatur distinctio ut consectetur dolore aperiam reiciendis asperiores eos commodi fugiat?",
    },

    {
      username: "saman",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni consectetur amet unde ullam aliquam sint, atque necessitatibus officia. Labore aspernatur distinctio ut consectetur dolore aperiam reiciendis asperiores eos commodi fugiat?",
    },
  ];
  return (
    <section>
      <Title>مدیریت نظرات</Title>

      <div className="flex items-center justify-between mt-3 flex-wrap">
        <div>
          <OrderBy active>جدیدترین</OrderBy>
          <OrderBy>قدیمی‌ترین</OrderBy>
        </div>

        <div>
          <span>فیلتر :</span>
          <Filter>تایید نشده</Filter>
          <Filter active>تایید شده</Filter>
        </div>
      </div>

      <div className="mt-10">
        {comments.map((comment) => (
          <Comment
            style={{ marginTop: "10px" }}
            key={comment.username}
            username={comment.username}
            message={comment.message}
          />
        ))}
      </div>
    </section>
  );
}
