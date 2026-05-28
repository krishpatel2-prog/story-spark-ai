import { useGetLatestListsQuery } from "../../../redux/apis/post.api";
import { Post } from "../../../models/post";
import LoadingAnimation from "../../loading/loading.component";
import SSProfile from "../../ui-component/ss-profile/ss-profile";
import { formatDateShort } from "../../../utils/time-formate";
import { useNavigate } from "react-router-dom";
import BookmarkButton from "../../BookmarkButton";

const LatestPostsComponent = () => {
  const { data, isLoading } = useGetLatestListsQuery(undefined);
  const navigate = useNavigate();

  const calculateReadingTime = (content: string): number => {
    if (!content) return 1;
    const words = content.trim().split(/\s+/).length;
    return Math.max(1, Math.ceil(words / 200));
  };


const getReadingTime = (content: string): string => {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return minutes === 1 ? "1 min read" : `${minutes} min read`;
};

const LatestPostsComponent = () => {
  const { data, isLoading } = useGetLatestListsQuery(undefined);
  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <section className="text-slate-100">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">
        Latest Posts
      </h2>
      <div className="space-y-5">
        {(data?.posts?.length ?? 0) > 0 ? (
    <div className="text-slate-900 dark:text-slate-100">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">Latest Posts</h2>
    <div>
      <h2 className="text-2xl font-bold text-gray-300 mb-6">Latest Posts</h2>
      <div className="space-y-6">
        {data?.posts?.length ?? 0 > 0 ? (
          data?.posts?.map((post: Post) => (
            <div
              key={post._id}
              onClick={() => navigate(`/post/${post._id}`)}
              className="motion-card-subtle story-panel group relative cursor-pointer rounded-lg p-5 hover:border-blue-400/35 sm:p-6"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-center">
                  <SSProfile name={post.author?.name || "Unknown User"} size="h-8 w-8" />
                  <div className="ml-3 min-w-0">
                    <p className="truncate text-sm font-semibold text-slate-300">
                      {post.author?.name || "Unknown User"}
                    </p>
                    <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1">
                      <p className="text-xs text-slate-500">
                        {formatDateShort(post.createdAt)}
                      </p>
                      <span className="text-xs text-slate-600">•</span>
                      <p className="text-xs font-medium text-indigo-300">
                        {calculateReadingTime(post.content)} min read
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <SSProfile name={post.author?.name || 'Unknown User'} size="h-8 w-8" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-600 dark:text-gray-400">
                      {post.author?.name || 'Unknown User'}
                    </p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <p className="text-xs text-slate-500 dark:text-gray-500">
                        {formatDateShort(post.createdAt)}
                      </p>
                      <span className="text-slate-400 dark:text-gray-600 text-xs">•</span>
                      {/* ⏱️ Dynamic Reading Time Element Addition */}
                      <p className="text-xs text-purple-400 font-medium flex items-center gap-1">
                        ⏱️ {calculateReadingTime(post.content)} min read
                      </p>
                    </div>
                  </div>
                </div>

                <div onClick={(e) => e.stopPropagation()} className="relative z-10">
                  <BookmarkButton
                    storyId={post._id}
                    bookmarks={post.bookmarks}
                    className="rounded-full p-1.5 text-slate-400 transition-colors hover:bg-slate-700/40 hover:text-purple-300"
                  />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold leading-snug text-slate-100 transition-colors group-hover:text-blue-300">
                {post.title}
              </h3>
              <p className="mb-5 line-clamp-2 leading-relaxed text-slate-400">
                {post.content}
              </p>
              <div className="flex flex-col gap-4 border-t border-slate-700/70 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1">
                    <i className="far fa-heart"></i> {post.likesCount}
              <h3 className="text-xl font-semibold text-slate-900 dark:text-gray-300 mb-2 group-hover:text-blue-400 transition-colors">
              className="bg-blue-500/10 rounded-lg shadow-sm p-6"
            >
              <div className="flex items-center mb-4">
                <SSProfile name={post.author?.name || 'Unknown User'} size="h-8 w-8" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-400">
                    {post.author?.name || 'Unknown User'}
                  </p>
                  <p className="text-xs text-gray-500">
                    {formatDateShort(post.createdAt)}
                  </p>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-300 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-400 mb-4">
                {post.content.slice(0, 170)}...
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-400">
                  <span className="flex items-center mr-4">
                    <i className="far fa-heart mr-1"></i> {post.likesCount}
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="far fa-comment"></i> {post.commentsCount}
                  </span>
                  <span className="flex items-center mr-4 bg-blue-500/30 !text-white text-xs font-medium px-2 py-1 rounded-full border border-blue-400/50">
                    <i className="far fa-clock mr-1"></i> {getReadingTime(post.content)}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.topic.map((topic) => (
                    <span
                      key={topic._id}
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${topic.color}`}
                    >
                      {topic.title}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="story-panel rounded-lg px-4 py-5 text-slate-300">
            Posts are not available.
          <div className="rounded-lg border border-slate-200 dark:border-slate-700/70 bg-slate-100 dark:bg-slate-900/40 px-4 py-5 text-slate-700 dark:text-slate-300">
            Post is not available!
          </div>
          <div>Post is not available!</div>
        )}
      </div>
    </section>
  );
};

export default LatestPostsComponent;