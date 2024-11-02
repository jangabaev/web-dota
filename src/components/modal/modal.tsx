import { Button } from "../ui/button";

export const Modal = ({
  isModal,
  setIsModal,
}: {
  isModal: boolean;
  setIsModal: (newValues: boolean) => void;
}) => {
  return (
    <div
      id="default-modal"
      aria-hidden="true"
      className={`${
        isModal ? "block" : "hidden"
      } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-bgModal flex items-center justify-center`}
      onClick={() => setIsModal(false)}
    >
      <div
        className="relative p-4 w-full max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-lg shadow bg-bgColor">
          <div className="flex items-center justify-between p-4 md:p-5 rounded-t dark:border-gray-600">
            <button
              type="button"
              className="absolute right-[10px] top-[10px] text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="default-modal"
              onClick={() => setIsModal(false)}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 md:p-5 space-y-4">
            <p className="text-base text-center leading-relaxed text-gray-500 dark:text-gray-400">
              У вас нету подписки
            </p>
          </div>
          <div className="flex items-center p-4 md:p-5 justify-center">
            <Button
              data-modal-hide="default-modal"
              onClick={() => setIsModal(false)}
            >
              Назад
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
