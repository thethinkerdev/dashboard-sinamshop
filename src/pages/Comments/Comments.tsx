import Title from "../../components/Title";
import Comment, {
  Props as CommentProps,
} from "../../components/Comment/Comment";

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
          <button className="px-3 py-2 border border-slate-900 shadow active:bg-slate-900 active:text-slate-100">
            جدیدترین
          </button>
          <button className="px-3 py-2 border border-slate-900 shadow bg-slate-900 text-slate-100">
            قدیمی‌ترین
          </button>
        </div>

        <div>
          فیلتر :
          <button className="px-3 py-2 shadow-2xl shadow-fuchsia-500 border border-fuchsia-500 text-fuchsia-500">
            تایید نشده
          </button>
          <button className="px-3 py-2 shadow-2xl shadow-fuchsia-500 border">
            تایید شده
          </button>
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
