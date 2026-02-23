import item1 from "./assets/HomeImg/item1.png";
import item2 from "./assets/HomeImg/item2.png";
import item3 from "./assets/HomeImg/item3.png";
import item4 from "./assets/HomeImg/item4.png";
import { createContext, useState, useEffect, useContext, useMemo } from "react";
export const LangContext = createContext();
export const CartContext = createContext();

export function CartProvider({ children }) {
  const langContext = useContext(LangContext);

  // التحقق من وجود LangContext وتوفير قيم افتراضية
  const lang = langContext?.lang || "en";
  const trasnaltions = langContext?.trasnaltions || {};
  const coin = langContext?.coin || "USD";
  const Currency = langContext?.Currency || {};

  const products = useMemo(() => {
    // استخدام القيم الافتراضية إذا لم تكن متاحة
    const translations = trasnaltions[lang] || {};
    const currency = Currency[coin] || {};

    return [
      {
        id: 1,
        img: item1,
        faheart: "fa-regular fa-heart  fa-xl",
        famagnifyingglassplus: "fa-solid fa-magnifying-glass-plus  fa-xl",
        name: translations?.PremiumCollection || "Premium Collection",
        paragraf: translations?.Maurisblanditaliquetelit || "",
        rating: 3,
        price: currency?.ca,
        Quantityoftheproduct: 300,
      },
      {
        id: 2,
        img: item2,
        faheart: "fa-regular fa-heart  fa-xl",
        famagnifyingglassplus: "fa-solid fa-magnifying-glass-plus  fa-xl",
        name: translations?.Classic || "Classic",
        paragraf: translations?.Comfortable || "",
        rating: 5,
        price: currency?.item2,
        Quantityoftheproduct: 40,
      },
      {
        id: 3,
        img: item3,
        faheart: "fa-regular fa-heart  fa-xl",
        famagnifyingglassplus: "fa-solid fa-magnifying-glass-plus  fa-xl",
        name: translations?.SmartWatch || "Smart Watch",
        paragraf: translations?.Modernsmartwatch || "",
        rating: 5,
        price: currency?.item3,
        Quantityoftheproduct: 20,
      },
      {
        id: 4,
        img: item4,
        faheart: "fa-regular fa-heart  fa-xl",
        famagnifyingglassplus: "fa-solid fa-magnifying-glass-plus  fa-xl",
        name: translations?.HPOmniBookLaptop || "HP OmniBook Laptop",
        paragraf: translations?.Lightweight || "",
        rating: 5,
        price: currency?.item4,
        Quantityoftheproduct: 100,
      },
    ];
  }, [lang, trasnaltions, coin, Currency]);
  const productscategory = useMemo(() => {
    // استخدام القيم الافتراضية إذا لم تكن متاحة
    const translations = trasnaltions[lang] || {};
    const currency = Currency[coin] || {};

    return [
      {
        id: 1,
        img: item1,
        faheart: "fa-regular fa-heart  fa-xl",
        famagnifyingglassplus: "fa-solid fa-magnifying-glass-plus  fa-xl",
        name: translations?.PremiumCollection || "Premium Collection",
        paragraf: translations?.Maurisblanditaliquetelit || "",
        rating: 3,
        price: currency?.ca,
        Quantityoftheproduct: 300,
        selectedCategory: "MensClothing",
        color: "blue",
      },
      {
        id: 2,
        img: item2,
        faheart: "fa-regular fa-heart  fa-xl",
        famagnifyingglassplus: "fa-solid fa-magnifying-glass-plus  fa-xl",
        name: translations?.Classic || "Classic",
        paragraf: translations?.Comfortable || "",
        rating: 5,
        price: currency?.item2,
        Quantityoftheproduct: 40,
        selectedCategory: "Sofasandseating",
        color: "blue",
      },
      {
        id: 3,
        img: item4,
        faheart: "fa-regular fa-heart  fa-xl",
        famagnifyingglassplus: "fa-solid fa-magnifying-glass-plus  fa-xl",
        name: translations?.SmartWatch || "Smart Watch",
        paragraf: translations?.Modernsmartwatch || "",
        rating: 5,
        price: currency?.item3,
        Quantityoftheproduct: 20,
        selectedCategory: "Watches",
        color: "blue",
      },
      {
        id: 4,
        img: item3,
        faheart: "fa-regular fa-heart  fa-xl",
        famagnifyingglassplus: "fa-solid fa-magnifying-glass-plus  fa-xl",
        name: translations?.HPOmniBookLaptop || "HP OmniBook Laptop",
        paragraf: translations?.Lightweight || "",
        rating: 5,
        price: currency?.item4,
        Quantityoftheproduct: 100,
        selectedCategory: "ComputersandLaptops",
        color: "blue",
      },
      {
        id: 5,
        img: "data:image/jpeg;base64,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",
        faheart: "fa-regular fa-heart  fa-xl",
        famagnifyingglassplus: "fa-solid fa-magnifying-glass-plus  fa-xl",
        name: translations?.iPhone || "HP OmniBook Laptop",
        paragraf: translations?.Sleek || "",
        rating: 5,
        price: currency?.item5,
        Quantityoftheproduct: 100,
        selectedCategory: "MobilePhonesandAccessories",
        color: "blue",
      },
      {
        id: 6,
        img: "data:image/jpeg;base64,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",
        faheart: "fa-regular fa-heart  fa-xl",
        famagnifyingglassplus: "fa-solid fa-magnifying-glass-plus  fa-xl",
        name: translations?.Wirelessearbuds || "HP OmniBook Laptop",
        paragraf: translations?.Wireless || "",
        rating: 5,
        price: currency?.item5,
        Quantityoftheproduct: 100,
        selectedCategory: "HeadphonesandAudioDevices",
        color: "blue",
      },
      {
        id: 7,
        img: "https://m.media-amazon.com/images/I/71-DxWvydgL._AC_UY327_FMwebp_QL65_.jpg",
        faheart: "fa-regular fa-heart  fa-xl",
        famagnifyingglassplus: "fa-solid fa-magnifying-glass-plus  fa-xl",
        name: translations?.EchoSpot || "HP OmniBook Laptop",
        paragraf: translations?.Smartalarmclock || "",
        rating: 5,
        price: currency?.item7,
        Quantityoftheproduct: 100,
        selectedCategory: "SmartDevices",
        color: "blue",
      },
    ];
  }, [lang, trasnaltions, coin, Currency]);

  // يقوم ب سؤال السلة هل يوجد قيمة اسمها كارد؟اذا في بجيب القيمة اما اذا لا برجعها فاضية و عند التغيير يرجع يحفظ يلي ضفتو
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // اذا كان المنتج موجود في السلة زيد العدد اما اذا ما كان موجود ضيفو
  const addToCart = (product) => {
    if (!product || !product.id) {
      return;
    }

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        if (existingItem.quantity >= product.Quantityoftheproduct) {
          return prevCart;
        }

        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  //   ازالة المنتج عند الضغط على remove Cart
  const removeFromCart = (productsId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productsId));
  };

  // تمنع ان يضع المستخدم الكمية صفر و تعطيه صلاحية زيادة عدد المنتج بدون اضافة سطر جديد

  const updateQuantity = (productsId, newQuantity) => {
    if (newQuantity < 1) return;
    if (newQuantity > 5) newQuantity = 5;
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productsId ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  //تزيد الريقم يلي على السلة
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  //   تحسب سحر المنتج ضرب الكمية زائد السعر الحالي يعني تضيفهم للمبلغ الموجود
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  // ! copon
  const [total, stetotal] = useState(Number(totalPrice.toFixed(2)));

  const [value, setValue] = useState(
    totalPrice ? Number(totalPrice.toFixed(2)) / 3 : 0,
  );
  const taxto = 27.0;
  const [shopselect, setShopselect] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // منطق تصفية المنتجات بناءً على البحث
  const filteredProducts = useMemo(() => {
    return productscategory.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm, productscategory]);
  return (
    <CartContext.Provider
      value={{
        products,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalItems,
        totalPrice,
        total,
        stetotal,
        value,
        setValue,
        taxto,
        setShopselect,
        shopselect,
        productscategory,
        searchTerm,
        setSearchTerm,
        filteredProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
