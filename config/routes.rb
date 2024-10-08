Rails.application.routes.draw do
  root 'pages#home'
  get 'blogs', to: 'pages#blogs', as: :blogs
  get 'recipes', to: 'pages#recipes', as: :recipes
  get 'shop', to: 'pages#shop', as: :shop
  get 'about', to: 'pages#about', as: :about
  get 'contact', to: 'pages#contact', as: :contact

  # Authentication
  get 'signup', to: 'users#new'
  post 'signup', to: 'users#create'
  get 'signin', to: 'sessions#new'
  post 'signin', to: 'sessions#create'
  delete 'signout', to: 'sessions#destroy'

  #Cart
  get 'cart', to: 'carts#index'

  #Line Items
  # config/routes.rb
  resources :line_items do
    patch 'increment', on: :member
    patch 'decrement', on: :member
  end

  resources :products, only: [:index, :show] do
    post 'add_to_cart', on: :member
  end
end
