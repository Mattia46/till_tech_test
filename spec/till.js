describe("Till", function(){

  var till;
  var menu;

  beforeEach(function() {
    menu = {
      "shopName": "The Coffee Connection",
      "address": "123 Lakeside Way",
      "phone": "16503600708",
      "prices": [
        {
          "Cafe Latte": 4.75,
          "Flat White": 4.75,
          "Cappucino": 3.85,
          "Single Espresso": 2.05,
          "Double Espresso": 3.75,
          "Americano": 3.75,
          "Cortado": 4.55,
          "Tea": 3.65,
          "Choc Mudcake": 6.40,
          "Choc Mousse": 8.20,
          "Affogato": 14.80,
          "Tiramisu": 11.40,
          "Blueberry Muffin": 4.05,
          "Chocolate Chip Muffin": 4.05,
          "Muffin Of The Day": 4.55
        }
      ]
    };

    till = new Till(menu);
  });

  it('Should has a ShopName', function(){
    console.log(till.shopName);
    console.log(menu);
    expect(till.shopName).toBe("The Coffee Connection");
  });

  it('Should has a address', function(){
    expect(till.address).toBe("123 Lakeside Way");
  });

  it('Should has a phone number', function(){
    expect(till.phone).toBe("16503600708");
  });

  it('Should has a price for a Cappuccino', function(){
    console.log(till.prices.Cappucino);
    expect(till.prices.Cappucino).toEqual(3.85);
  });
});
