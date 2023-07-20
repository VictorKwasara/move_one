module one::one_counter {  
 use sui::object::{Self, UID} ;
 use sui::tx_context::{Self, TxContext};
 use sui::transfer;

 struct Counter has key {  
  id: UID,
  value: u8,
}

public entry fun initialize (ctx: &mut TxContext) {
 let counter =  Counter {
    id: object::new(ctx),
    value: 0,
  };
  transfer::transfer(counter, tx_context::sender(ctx));
}

public entry fun add_one (counter: &mut Counter){
  counter.value = counter.value + 1 ;
}

public entry fun sub_one (counter: &mut Counter){
  counter.value = counter.value - 1 ;
}
}