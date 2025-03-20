import { FaRobot, FaChartLine, FaUserFriends, FaCog } from 'react-icons/fa'

export default function Features() {
  const features = [
    {
      icon: <FaRobot className="w-8 h-8" />,
      title: "Chatbots Inteligentes",
      description: "Automatize seu atendimento com IA avançada"
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Analytics Detalhado",
      description: "Métricas e insights em tempo real"
    },
    {
      icon: <FaUserFriends className="w-8 h-8" />,
      title: "Multiusuários",
      description: "Gerencie várias equipes e departamentos"
    },
    {
      icon: <FaCog className="w-8 h-8" />,
      title: "Personalizável",
      description: "Adapte a plataforma ao seu negócio"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-roxo-escuro mb-4">
            Recursos Principais
          </h2>
          <p className="text-gray-600">
            Tudo que você precisa para modernizar seu atendimento
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="text-roxo-medio mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
