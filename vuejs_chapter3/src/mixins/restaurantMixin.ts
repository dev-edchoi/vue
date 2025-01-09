import { defineComponent } from "vue";

interface MenuItem {
  id: string;
  name: string;
  price: number;
}

export const restaurantMixins = defineComponent({
  data() {
    return {
      menu: [] as MenuItem[], // 타입 명시
      reservations: [] as string[], // 예시: 예약 데이터를 문자열 배열로 가정
      payments: [],
      title: 'Restaurant',
    };
  },
  methods: {
    makeReservation() {
      console.log("Reservation made");
    },
    acceptPayment() {
      console.log("Payment accepted");
    },
  },
  created() {
    console.log(`Welcome to ${this.title}`);
  },
});
