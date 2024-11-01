// import { useEffect, useState } from "react";
// import CryptoJS from "crypto-js";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    analysis: {
      team1: [
        {
          id: 83,
          name: "Templar Assassin",
          photo: "heroIcons/templar_assassin.png",
        },
        { id: 47, name: "Terrorblade", photo: "heroIcons/terrorblade.png" },
        { id: 108, name: "Tidehunter", photo: "heroIcons/tidehunter.png" },
        { id: 40, name: "Timbersaw", photo: "heroIcons/timbersaw.png" },
        { id: 70, name: "Tinker", photo: "heroIcons/tinker.png" },
      ],
      team2: [
        {
          id: 105,
          name: "Vengeful Spirit",
          photo: "heroIcons/vengeful_spirit.png",
        },
        { id: 72, name: "Venomancer", photo: "heroIcons/venomancer.png" },
        { id: 95, name: "Viper", photo: "heroIcons/viper.png" },
        { id: 122, name: "Visage", photo: "heroIcons/visage.png" },
        { id: 18, name: "Warlock", photo: "heroIcons/warlock.png" },
      ],
    },
    date: "31 октября 2024, 17:04:20",
  },
  {
    id: 2,
    analysis: {
      team1: [
        {
          id: 83,
          name: "Templar Assassin",
          photo: "heroIcons/templar_assassin.png",
        },
        { id: 47, name: "Terrorblade", photo: "heroIcons/terrorblade.png" },
        { id: 108, name: "Tidehunter", photo: "heroIcons/tidehunter.png" },
        { id: 40, name: "Timbersaw", photo: "heroIcons/timbersaw.png" },
        { id: 70, name: "Tinker", photo: "heroIcons/tinker.png" },
      ],
      team2: [
        {
          id: 105,
          name: "Vengeful Spirit",
          photo: "heroIcons/vengeful_spirit.png",
        },
        { id: 72, name: "Venomancer", photo: "heroIcons/venomancer.png" },
        { id: 95, name: "Viper", photo: "heroIcons/viper.png" },
        { id: 122, name: "Visage", photo: "heroIcons/visage.png" },
        { id: 18, name: "Warlock", photo: "heroIcons/warlock.png" },
      ],
    },
    date: "31 октября 2024, 17:04:20",
  },
  {
    id: 3,
    analysis: {
      team1: [
        {
          id: 83,
          name: "Templar Assassin",
          photo: "heroIcons/templar_assassin.png",
        },
        { id: 108, name: "Tidehunter", photo: "heroIcons/tidehunter.png" },
        { id: 40, name: "Timbersaw", photo: "heroIcons/timbersaw.png" },
        { id: 70, name: "Tinker", photo: "heroIcons/tinker.png" },
        { id: 71, name: "Tiny", photo: "heroIcons/tiny.png" },
      ],
      team2: [
        {
          id: 105,
          name: "Vengeful Spirit",
          photo: "heroIcons/vengeful_spirit.png",
        },
        { id: 95, name: "Viper", photo: "heroIcons/viper.png" },
        { id: 122, name: "Visage", photo: "heroIcons/visage.png" },
        { id: 18, name: "Warlock", photo: "heroIcons/warlock.png" },
        { id: 30, name: "Weaver", photo: "heroIcons/weaver.png" },
      ],
    },
    date: "31 октября 2024, 17:04:20",
  },
];
export const History = () => {
  // const [rezults, setRezult] = useState([]);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   if (true) {
  //     if (window.Telegram) {
  //       window.Telegram.WebApp.ready();
  //       const encryptedUserId = CryptoJS.AES.encrypt(
  //         String(window.Telegram.WebApp.initDataUnsafe.user.id),
  //         "arman"
  //       ).toString();

  //       const fetchData = async () => {
  //         try {
  //           const response = await fetch(
  //             "https://jsonplaceholder.typicode.com/posts",
  //             {
  //               method: "GET",
  //               headers: {
  //                 Authorization: `Bearer ${encryptedUserId}`,
  //                 "Content-Type": "application/json",
  //               },
  //             }
  //           );
  //           const result = await response.json();
  //           setRezult(result);
  //         } catch (error) {
  //           console.error("Error fetching data:", error);
  //         } finally {
  //           setLoading(false);
  //         }
  //       };
  //       fetchData();
  //     }
  //   } else {
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch(
  //           "https://jsonplaceholder.typicode.com/posts",
  //           {
  //             method: "GET",
  //             headers: {
  //               Authorization: `Bearer ${token}`,
  //               "Content-Type": "application/json",
  //             },
  //           }
  //         );
  //         const result = await response.json();
  //         setRezult(result);
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };
  //     fetchData();
  //   }
  // }, []);
  return (
    <section className="px-5 py-2 pb-[200px]">
      {data.map((el) => (
        <Link to={`/history/${el.id}`} key={el.id}>
          <div className="mb-2 border border-black p-2 rounded-md">
            <div className="flex gap-4">
              <div className="flex justify-start">
                {el.analysis.team1.map((item) => (
                  <img
                    src={`/img/${item.photo}`}
                    className="h-6"
                    key={item.id}
                  />
                ))}
              </div>
              <p className="text-green-600">Силы Света</p>
            </div>
            <div className="flex gap-4 mt-4">
              <p className="text-red-600">Силы Света</p>
              <div className="flex justify-start">
                {el.analysis.team2.map((item) => (
                  <img
                    src={`/img/${item.photo}`}
                    className="h-6 w-[42px]"
                    key={item.id}
                  />
                ))}
              </div>
            </div>
            <p className="text-textColor text-center mt-1 opacity-70">
              {el.date}
            </p>
          </div>
        </Link>
      ))}
    </section>
  );
};
