require "opal"
require "opal/version"
require "browser"
# require "react"

class Message
  # include React::Component

  def hello
    'Hello, this is from Opal!'
  end

  # def render
  #   div do
  #     h1 { "Hello from React!" }
  #     h2 { "Using Opal #{Opal::VERSION}" }
  #   end
  # end
end
