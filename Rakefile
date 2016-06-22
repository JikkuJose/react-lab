require "bundler"
Bundler.require
require 'Opal'

desc "Start webpack"
task :webpack do
  exec({"OPAL_LOAD_PATH" => Opal.paths.join(":")}, "webpack-dev-server --progress -d")
end
