import React, { useState } from 'react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulamos el envío del formulario
      await new Promise(resolve => setTimeout(resolve, 1500))

      // Resetear el formulario después de enviar
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })

      setSubmitStatus({
        success: true,
        message: 'Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.',
      })
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.',
      })
    } finally {
      setIsSubmitting(false)

      // Limpiar el mensaje de estado después de 5 segundos
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }
  }

  return (
    <section className="bg-zinc-900 text-white min-h-screen py-16 flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-3">Contáctanos</h2>
          <p className="text-gray-400">
            ¿Tienes preguntas? Estamos aquí para ayudarte. Rellena el formulario o contáctanos
            directamente.
          </p>
        </div>

        <div className="bg-black rounded-lg p-8 shadow-xl border border-zinc-800">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-[#1c2536] text-white w-full px-4 py-3 rounded-md border border-gray-700 focus:ring-amber-400 focus:border-amber-400 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-[#1c2536] text-white w-full px-4 py-3 rounded-md border border-gray-700 focus:ring-amber-400 focus:border-amber-400 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="bg-[#1c2536] text-white w-full px-4 py-3 rounded-md border border-gray-700 focus:ring-amber-400 focus:border-amber-400 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="bg-[#1c2536] text-white w-full px-4 py-3 rounded-md border border-gray-700 focus:ring-amber-400 focus:border-amber-400 focus:outline-none"
              ></textarea>
            </div>

            {submitStatus && (
              <div
                className={`p-3 rounded-md ${
                  submitStatus.success
                    ? 'bg-green-800/30 text-green-400'
                    : 'bg-red-800/30 text-red-400'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-amber-400 hover:bg-amber-500 text-black font-medium px-6 py-3 rounded-md transition-colors disabled:opacity-70"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
