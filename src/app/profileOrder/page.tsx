// import { wixClientServer } from "@/lib/wixClientServer";

// const ProfileOrdersPage = async ({ params }: { params: { memberId: string } }) => {
//   const wixClient = await wixClientServer();

//   let orders;
//   try {
//     orders = await wixClient.orders.listOrders({
//       filter: { buyerId: params.memberId },
//       limit: 50, // isteğe göre arttırabilirsin
//     });
//   } catch (err) {
//     console.error(err);
//     orders = [];
//   }

//   return (
//     <div>
//       <h1>Orders for this profile</h1>
//       {orders.map((order: any) => (
//         <div key={order._id}>
//           <p>Order ID: {order._id}</p>
//           <p>Total: {order.priceSummary?.subtotal?.amount}</p>
//           <p>Status: {order.status}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProfileOrdersPage;
