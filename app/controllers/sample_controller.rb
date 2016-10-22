class SampleController < ApplicationController
  def index
  end

  def sample
    render json: {
        progress: rand(100),
        date: DateTime.now
    }
  end
end
