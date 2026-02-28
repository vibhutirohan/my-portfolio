import{r as s}from"./index-fCHVNa8e.js";const d=[{slug:"whatsapp-otp-auth-react-twilio",title:"WhatsApp OTP Authentication with React & Twilio: Handling Edge Cases",excerpt:"A deep dive into implementing robust WhatsApp OTP authentication, covering edge cases like rate limiting, retry logic, expired codes, and user experience considerations.",date:"2025-08-15",readTime:"8 min",tags:["React","Twilio","Authentication","WhatsApp"],content:`
# WhatsApp OTP Authentication with React & Twilio: Handling Edge Cases

Implementing WhatsApp OTP authentication seems straightforward at first—send a code via Twilio, verify it, done. But in production, the devil is in the edge cases.

## The Basic Flow

1. User enters phone number
2. System generates 6-digit OTP
3. Twilio WhatsApp API sends the code
4. User enters the code
5. System verifies and issues auth token

## Edge Cases That Will Bite You

### 1. Rate Limiting
Users will spam the "Resend Code" button. Implement per-phone rate limits.

### 2. Code Expiration
OTP codes shouldn't live forever—5-minute expiration is standard.

\`\`\`typescript
const sendOTP = async (phoneNumber: string) => {
  const otp = generateOTP(6);
  await storeOTP(phoneNumber, otp, { ttl: 300 }); // 5 minutes
  await twilio.messages.create({
    from: 'whatsapp:+14155238886',
    to: \`whatsapp:\${phoneNumber}\`,
    body: \`Your verification code is: \${otp}\`
  });
};
\`\`\`
    `,published:!0},{slug:"rag-vs-fine-tuning",title:"RAG vs Fine-tuning: When to Use Which Approach",excerpt:"A practical comparison of Retrieval-Augmented Generation and fine-tuning for building AI applications.",date:"2025-07-20",readTime:"10 min",tags:["AI","LLM","RAG","Fine-tuning"],content:`
# RAG vs Fine-tuning: When to Use Which Approach

The question comes up in every AI project: should we use RAG or fine-tune?

## When to Choose RAG
- Dynamic knowledge: Your data changes frequently
- Transparency: You need to show sources
- Quick iteration: Start today, no training needed

## When to Choose Fine-tuning
- Specific behavior: You need particular output styles
- Domain language: Specialized vocabulary/terminology
- Speed: Lower latency (no retrieval step)
    `,published:!0},{slug:"building-scalable-data-pipelines",title:"Building Scalable Data Pipelines with Apache Kafka",excerpt:"Learn how to construct highly scalable and fault-tolerant data pipelines using Apache Kafka for real-time streaming analytics.",date:"2025-06-10",readTime:"12 min",tags:["Data Engineering","Kafka","Streaming","Architecture"],content:`
# Building Scalable Data Pipelines with Apache Kafka

As data volumes grow, traditional batch processing often falls short. Enter Apache Kafka: the backbone of modern streaming data architecture.

## Why Kafka?
- High throughput
- Fault tolerance
- Distributed streaming platform

## Key Components

1. **Producers**: Publish data to topics.
2. **Consumers**: Subscribe to topics to process data.
3. **Brokers**: Manage storage and partition assignment.

In this guide, we explore scaling Kafka clusters to handle millions of events per second while ensuring exactly-once processing semantics.
    `,published:!0},{slug:"demystifying-kubernetes-deployments",title:"Demystifying Kubernetes Deployments for Developers",excerpt:"A developer-friendly guide to understanding Kubernetes concepts, writing robust manifests, and deploying applications confidently to production clusters.",date:"2025-05-22",readTime:"15 min",tags:["Kubernetes","DevOps","Docker","Cloud"],content:`
# Demystifying Kubernetes Deployments for Developers

Kubernetes has a steep learning curve, but mastering its fundamental primitives is essential for modern backend development.

## Core Primitives

- **Pods**: The smallest deployable units.
- **Deployments**: Declarative updates for Pods.
- **Services**: Exposing your application to the network.

## Writing a Solid Deployment

Always define resource limits and requests to prevent noisy neighbors and ensure cluster stability:

\`\`\`yaml
resources:
  requests:
    memory: "64Mi"
    cpu: "250m"
  limits:
    memory: "128Mi"
    cpu: "500m"
\`\`\`
    `,published:!0},{slug:"mastering-react-server-components",title:"Mastering React Server Components",excerpt:"Dive deep into React Server Components (RSC) to understand how they blend the benefits of server-side rendering with rich client-side interactivity.",date:"2025-04-05",readTime:"9 min",tags:["React","Frontend","Performance","Web"],content:`
# Mastering React Server Components

React Server Components represent a paradigm shift in how we build React applications, pushing data fetching entirely to the server.

## The Problem with Traditional SSR
Standard SSR sends HTML, but the client still needs to download and execute all the JavaScript to hydrate the page.

## How RSCs Solve It
Server Components never ship to the client. They execute on the server, fetch data directly from the database, and stream the resulting UI down to the browser.
This drastically reduces bundle sizes and improves Time to Interactive (TTI).
    `,published:!0},{slug:"effective-python-type-hinting",title:"Effective Python Type Hinting for Large Codebases",excerpt:"Discover best practices and advanced techniques for standardizing Python type hints across large, complex engineering teams.",date:"2025-03-12",readTime:"7 min",tags:["Python","Typing","Software Engineering","Best Practices"],content:`
# Effective Python Type Hinting for Large Codebases

Python's dynamic nature is a blessing until your codebase scales past 50,000 lines. Type hints are mandatory for large-scale maintainability.

## Advanced Techniques

### Type Variables and Generics
When building reusable utilities, \`TypeVar\` is your best friend.

\`\`\`python
from typing import TypeVar, List

T = TypeVar('T')

def reverse_list(items: List[T]) -> List[T]:
    return items[::-1]
\`\`\`

### Protocols for Structural Subtyping
Use \`Protocol\` instead of base classes to define expected behavior without forcing inheritance. This enforces duck typing statically based on structure, drastically improving testability.
    `,published:!0}];function P(e){return d.find(t=>t.slug===e)}function S(){return d.filter(e=>e.published)}/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=(...e)=>e.filter((t,i,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===i).join(" ").trim();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,n)=>n?n.toUpperCase():i.toLowerCase());/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=e=>{const t=f(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var b={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=s.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:n,className:r="",children:a,iconNode:u,...c},h)=>s.createElement("svg",{ref:h,...b,width:t,height:t,stroke:e,strokeWidth:n?Number(i)*24/Number(t):i,className:p("lucide",r),...!a&&!v(c)&&{"aria-hidden":"true"},...c},[...u.map(([g,m])=>s.createElement(g,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o=(e,t)=>{const i=s.forwardRef(({className:n,...r},a)=>s.createElement(w,{ref:a,iconNode:t,className:p(`lucide-${y(l(e))}`,`lucide-${e}`,n),...r}));return i.displayName=l(e),i};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],x=o("arrow-left",T);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],R=o("calendar",A);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],D=o("clock",C);export{x as A,R as C,D as a,P as b,o as c,S as g};
