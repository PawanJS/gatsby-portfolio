---
category: 'blog'
cover: './cover.jpg'
title: 'Why serverless is the future for small startups?'
description: 'Don’t use a screwdriver to hammer nails into a wall!'
date: '2020-12-19'
tags: ['Serverless']
published: true
---

![why-serverless-is-the-future-for-small-startups](./cover.jpg)

_When it comes to backend web development in 2019, the landscape is vast — from VMs to containers to serverless functions — there’s something for every company. Many of the large big banks, government agencies, and older companies still rely on older technology to run their applications._

_Younger companies like Uber, Netflix, and Monzo have benefited from containerization and Microservices to move faster and be more productive. Interestingly, Netflix accounts for about 15% of all Internet traffic (more than any other video streaming service), so it’s unsurprising that they are at the forefront of designing and running applications at scale._

**Spend time on the things that really matter**

The sad truth is, the tech doesn’t matter. Well, at least not to the user. The user doesn’t care if your backend is written in Java, Go, or NodeJS. They don’t care if it uses containers, or serverless, running on VMs on or premise. The user cares about their experience; is it valuable to them, does it work well, and does it look good?

In the early days of a tech startup, you’re testing out new hypotheses all the time. You come up with a new theory or idea and you need to test it quickly to verify you’re building something useful. The faster you can build and test features, the faster that feedback loop will be and the easier it will be to find exactly what your users want from your product.

When the team building your new product is really small, managing complex infrastructure is unlikely to be an effective use of your time. Any work that is spent managing an application rather than building it is overhead of your product. It is however important to remember that CI/CD is incredibly useful. It helps you move even faster.

With serverless, you can focus on application logic. Every feature on a website or mobile app translates to one or more API calls and therefore a serverless function or functions. Given that each serverless function is only responsible for a particular API call, the code can be much simpler than its Microservice or Monolithic counterpart. Much of the work I’ve done using serverless uses barely any libraries.

You’ve suddenly got a huge amount of traffic? Don’t worry — serverless can handle that for you out of the box. No need to manage autoscaling groups for servers or containers. You can also integrate with on-demand databases such as AWS DynamoDB or MongoDB Stitch, which can also scale automatically with demand.

**Pay nothing in your early days**

One massive selling point of serverless is that you pay per request. Unlike VMs, you never pay when your service is idle and not being used. It’s important that you use it for the right reasons though — don’t use it for long-running, CPU-intensive services as it will cost you more than just running a VM instance (i.e. AWS EC2). You also might pay more with serverless if you have high traffic at a constant rate — EC2 may be more cost-efficient.

**So what are the potential problems?**

Serverless has its drawbacks, but it’s all about the use case. Use it in the right way and you can benefit from massive cost savings, reduced time to market, and reduced overhead.

**Don’t use a screwdriver to hammer nails into a wall.**

The Register Magazine quoted a number of UC Berkeley researchers who conducted some tests on AWS Lambda; one of which was training a machine learning model and comparing it to AWS EC2. “That task costs 57x less on EC2 than Lambda and EC2 latency was much better.” Right — so let's use it for things it’s great at. Event-driven services.

When designing applications with serverless, it’s really important to avoid using large libraries as much as possible. Cold start-up times can be drastically increased when using large services, negatively impacting your user’s experience.

Vendor lock-in. If you’re in the tech space, you’ve probably heard that term before. As serverless has become more widely used, many of the cloud providers have released their own versions of serverless functions. Frameworks like serverless attempt to abstract from the cloud provider and make it easier to migrate between them. There are a number of serverless solutions like knative and kubeless which allow you to run serverless workloads using kubernetes on any cloud or even your own infrastructure.

**TLDR;**

In short, the new era of computing is here. Serverless lets you concentrate on building products rather than managing servers. For small startups, the benefits can be huge — in terms of both speeds to market and cost savings.
