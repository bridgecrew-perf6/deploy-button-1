import { Container, Heading,Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  function log(message: any) {
    console.log(message);
  }
  var message = "hello World";
  log(message);

  function doSomething() {
    for (var i = 0; i < 5; i++) {
      console.log(i)
    }
    console.log('finally : ' + i)
  }
  doSomething();

  let a: any;
  let b: boolean;
  let c: number;
  let f: string;
  let d: number[] = [1, 2, 3];
  let e: any[] = [1, 'a', true, false]
  const colorRed = 0;
  const colorGreen = 1;
  const colorBlue = 2;
  enum color { Red = 1, Green = 2, Blue = 3 };
  let backgroundColor = color.Red;

  let logs = (message: any) => console.log(message);
  logs(message);

  // interface Point{
  //   x:number,
  //   y:number,
  //   draw:()=>void
  // }
  // let drawPoint=(point:Point)=>{}

  class Point {
    constructor(private x?: number, private y?: number) {
    }
    draw() {
      console.log('x = ' + this.x + ' ' + 'y = ' + this.y);
    }
    getX() {
      return this.x;
    }
    setX(value: number) {
      if (value < 0)
        throw new Error("value cannot be less than 0")
      this.x = value;
    }

  }
  let point = new Point(1, 2);
  point.setX(10);
  point.getX();
  point.draw();

  class Points {
    constructor(private x?: number, private y?: number) {
    }
    draw() {
      console.log('x = ' + this.x + ' ' + 'y = ' + this.y);
    }
    get X() {
      return this.x;
    }
    set X(value: number) {
      if (value < 0)
        throw new Error("value cannot be less than 0")
      this.x = value;
    }

  }
  let points = new Points(1, 2);
  let xx = point.getX();
  points.X = 10;
  points.draw();


  return (
    <Container maxW="container.lg" centerContent>
      <Heading>Deploy Button</Heading>
      <Text>Deploy public Git projects with the Deploy Button, providing an easy-to-use flow to set up new projects with Vercel and GitHub, GitLab, or Bitbucket.</Text>
      <a href="https://vercel.com/new/clone?repository-url=https://github.com/christianapd/deploy-button"><img src="https://vercel.com/button" alt="Deploy with Vercel" /></a>
    </Container>
  )
}

export default Home
