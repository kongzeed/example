function ops(n1, n2, n3) {
  //arguments[0]=n1, arguments[1]=n2, arguments[2]=n3
  console.log(arguments.length); //3
  arguments[0] = 555;
  console.log(n1);
  // for (const argu of arguments) {
  //   console.log(argu) //1, true, 'xyz
  // }
}
ops(1, true, "xyz");
