Rails.application.routes.draw do
  get '/sample/:id', to: 'sample#sample'
  root to: 'sample#index'
end
