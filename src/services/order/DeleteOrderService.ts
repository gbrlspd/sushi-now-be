import prismaClient from '../../prisma';

interface IOrderRequest {
  order_id: string
}

class DeleteOrderService {
  async execute({ order_id }) {
    const order = await prismaClient.order.delete({
      where: { id: order_id }
    })
    return order;
  }
}

export { DeleteOrderService };