"use client";

import React from "react";
import { Typography, Card } from "@material-tailwind/react";

const FAQS = [
  {
    title: "Quando devo começar?",
    desc: "Você pode começar a usar o aplicativo móvel imediatamente após a inscrição. Basta fazer o download do aplicativo e fazer login com suas credenciais.",
  },
  {
    title: "Posso experimentar antes de comprar?",
    desc: "Claro! Oferecemos uma avaliação gratuita de 7 dias para que você possa experimentar o aplicativo antes de se comprometer com uma assinatura paga.",
  },
  {
    title: "Posso trocar de plano a qualquer momento?",
    desc: "Sim, você pode atualizar ou rebaixar seu plano a qualquer momento. Basta fazer login e navegar até a seção [Atualizar conta] em seu painel.",
  },
  {
    title: "Posso cancelar minha assinatura?",
    desc: "Claro! Você pode cancelar sua assinatura a qualquer momento sem perguntas. Sua assinatura permanecerá ativa até o final do ciclo de faturamento atual.",
  },
  {
    title: "Tenho suporte técnico?",
    desc: "Sim, oferecemos suporte técnico 24 horas por dia, 7 dias por semana. Você pode entrar em contato conosco a qualquer momento e nossa equipe de suporte terá prazer em ajudá-lo.",
  },
  {
    title: "Posso usar modelos prontos?",
    desc: "Sim, você pode usar modelos prontos para criar seu aplicativo móvel. Temos uma ampla variedade de modelos disponíveis para você escolher.",
  },
];

export function Faqs() {
  return (
    <section className="px-8 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center">
          <Typography variant="h1" color="blue-gray" className="mb-4" placeholder={"Lótus Alfaiataria"}
            onPointerEnterCapture={() => { }}
            onPointerLeaveCapture={() => { }}>
            Perguntas Frequentes
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 !text-gray-500 lg:w-3/5"
            placeholder={"Lótus Alfaiataria"}
            onPointerEnterCapture={() => { }}
            onPointerLeaveCapture={() => { }}
          >
            Aqui estão algumas perguntas frequentes que nossos clientes fazem.
          </Typography>
        </div>

        <div className="grid gap-20 md:grid-cols-1 lg:grid-cols-3">
          {FAQS.map(({ title, desc }) => (
            <Card key={title} shadow={false} color="transparent"
              placeholder={"Lótus Alfaiataria"}
              onPointerEnterCapture={() => { }}
              onPointerLeaveCapture={() => { }}>
              <Typography color="blue-gray" className="pb-6" variant="h4" placeholder={"Lótus Alfaiataria"}
                onPointerEnterCapture={() => { }}
                onPointerLeaveCapture={() => { }}>
                {title}
              </Typography>
              <div className="pt-2">
                <Typography className="font-normal !text-gray-500" placeholder={"Lótus Alfaiataria"}
                  onPointerEnterCapture={() => { }}
                  onPointerLeaveCapture={() => { }}>
                  {desc}
                </Typography>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;
