Rails.application.routes.draw do
  get '/', to: 'pages#index'
  namespace :api do 
    namespace :v1 do
      resources :boards
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
